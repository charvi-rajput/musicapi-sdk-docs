# Error Handling
Catch and handle errors for a better user experience.

## Javascript

```js
try {
  await tp.files.delete('file_12345');
  console.log('OK');
} catch (err) {
  if (err.message.includes('not found') || err.code === 401) {
    console.error('Error: Already Deleted');
  } else {
    console.error('Deletion failed:', err.message);
  }
}

```

-----

## Python

```python
try:
    tp.files.delete('file_12345')
    print("OK")
except Exception as e:
    error_msg = str(e).lower()
    if "not found" in error_msg or "already deleted" in error_msg:
        print("Error: Already Deleted")
    else:
        print(f"Deletion failed: {e}")

```