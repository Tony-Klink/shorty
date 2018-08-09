# SHORTY - dumb url shortener

## Run it:
- node ./index.js

## Examle POST request

```
curl --request POST \
  --url http://localhost:3000/links \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data 'name=verySmart&originalLink=https%3A%2F%2Fgoogle.com&exp=12'
```

## Example GET request

```
curl --request GET \
  --url http://localhost:3000/verySmart
```