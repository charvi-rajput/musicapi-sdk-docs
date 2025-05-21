# Frequently Asked Questions (FAQs)

-----

### Q. Does the TunePlay SDK support both JavaScript and Python?
**A.** Yes, the SDK is available for both JavaScript and Python, with equivalent functionality in both.

-----

### Q. Does the SDK support mobile and desktop environments?
**A.** Yes, the JavaScript SDK supports both web and mobile browsers. The Python SDK works in any environment that supports Python 3.7+.

-----

### Q. How do I authenticate users securely?
**A.** Use the built-in OAuth2 authentication methods provided by the SDK to securely log users in and manage access tokens.

-----

### Q. What happens if a user tries to delete a file that no longer exists?
**A.** The SDK will raise an error. You can catch it and show a message like: “The file you are trying to delete does not exist or has already been removed.”

-----

### Q. Are API rate limits enforced?
**A.** Yes, rate limits apply. Check the developer dashboard for your plan’s quota and usage.