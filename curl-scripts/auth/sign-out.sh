# VARIABLE=VALUE sh curl-scripts/auth/sign-out.sh

curl "https://library-express-api.herokuapp.com/sign-out" \
   --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
echo
