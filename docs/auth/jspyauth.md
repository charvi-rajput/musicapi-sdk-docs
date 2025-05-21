# Authentication
TunePlay SDK uses Basic Authorization for secure user authentication.

## Javascript 

```bash
await tp.auth.loginWithPopup();

if (tp.auth.isAuthenticated()) {
  console.log('User is logged in!');
}

```

-----

## Python

```bash
tp.auth.login_with_browser() 

if tp.auth.is_authenticated():
    print("User is logged in!")

```
After login, basic authorization is automatically managed by the SDK.