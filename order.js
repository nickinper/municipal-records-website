// Configuration
const API_BASE_URL = 'https://municipal-records-api.onrender.com'; // Update this for production
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51RcKLYDVMiQlTjvyuYACM9VKA783Z2qaclFc90CO2JuukD1fGgGpeqP8RBR0xyp9vXDLml9Dy8aJADbR6Q6ujTCe00U5Xg0ORz';

// Initialize Stripe
const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

// Form elements
const form = document.getElementById('order-form');
const submitButton = document.getElementById('submit-button');
const buttonText = document.getElementById('button-text');
const spinner = document.getElementById('spinner');
const errorMessage = document.getElementById('error-message');
const successMessage = document.getElementById('success-message');

// Handle form submission
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous messages
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    
    // Show loading state
    submitButton.disabled = true;
    buttonText.style.display = 'none';
    spinner.style.display = 'inline-block';
    
    try {
        // Get form data
        const formData = new FormData(form);
        const data = {
            report_type: formData.get('report_type'),
            case_number: formData.get('case_number'),
            incident_date: formData.get('incident_date') || null,
            incident_location: formData.get('incident_location') || null,
            requestor_first_name: formData.get('requestor_first_name'),
            requestor_last_name: formData.get('requestor_last_name'),
            requestor_email: formData.get('requestor_email'),
            requestor_phone: formData.get('requestor_phone') || null,
            notes: formData.get('notes') || null
        };
        
        // Submit to API
        const response = await fetch(`${API_BASE_URL}/api/v1/submit-request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Failed to submit request');
        }
        
        const result = await response.json();
        
        // Redirect to Stripe Checkout
        if (result.payment_url) {
            // For Stripe Checkout, redirect directly
            window.location.href = result.payment_url;
        } else {
            throw new Error('No payment URL received');
        }
        
    } catch (error) {
        console.error('Error:', error);
        errorMessage.textContent = error.message || 'An error occurred. Please try again.';
        errorMessage.style.display = 'block';
        
        // Reset button state
        submitButton.disabled = false;
        buttonText.style.display = 'inline';
        spinner.style.display = 'none';
    }
});

// Format phone number as user types
const phoneInput = document.getElementById('phone');
phoneInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        if (value.length <= 3) {
            value = `(${value}`;
        } else if (value.length <= 6) {
            value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
        } else {
            value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
    }
    e.target.value = value;
});

// Handle successful payment return
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    successMessage.textContent = 'Payment successful! We\'ll email you when your report is ready.';
    successMessage.style.display = 'block';
    form.style.display = 'none';
}

if (urlParams.get('canceled') === 'true') {
    errorMessage.textContent = 'Payment was canceled. Please try again when you\'re ready.';
    errorMessage.style.display = 'block';
}
