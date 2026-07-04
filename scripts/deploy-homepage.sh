#!/usr/bin/env bash
set -euo pipefail

DOMAIN="https://sunrin-realestate-f4u5.vercel.app"
COMMIT_MSG="${1:-Deploy Seonrin homepage final landing}"

echo "=== 1. PROJECT ==="
pwd

echo
echo "=== 2. Git branch/status ==="
git branch --show-current
git status --short

echo
echo "=== 3. Sync main ==="
git checkout main
git pull --ff-only origin main

echo
echo "=== 4. Required string check ==="
grep -R "선린공인중개사사무소" app components >/dev/null
grep -R "상담 문의" app components >/dev/null
grep -R "주소 찾기" app components >/dev/null
grep -R "권리검토" app components >/dev/null
grep -R "종류별 계약 상담" app components >/dev/null
grep -R "tel:0539441116" app components >/dev/null

echo "OK: required strings found"

echo
echo "=== 5. Build ==="
npm run build

echo
echo "=== 6. Commit if changed ==="
if ! git diff --quiet || ! git diff --cached --quiet; then
  git add app components public package.json package-lock.json next.config.mjs tsconfig.json 2>/dev/null || true
  git commit -m "$COMMIT_MSG"
else
  echo "No local changes to commit."
fi

echo
echo "=== 7. Push main ==="
git push origin main

HASH="$(git rev-parse --short HEAD)"
CACHE_BUSTER="$(date +%s)"
URL="${DOMAIN}/?v=${HASH}-${CACHE_BUSTER}"

echo
echo "=== 8. Wait for Vercel deployment ==="
echo "Production URL:"
echo "$URL"
echo
echo "Vercel usually needs 30~90 seconds. Checking HTTP response..."

for i in {1..24}; do
  CODE="$(curl -L -s -o /tmp/seonrin_homepage_check.html -w "%{http_code}" "$URL" || true)"
  echo "check $i: HTTP $CODE"

  if [[ "$CODE" == "200" ]]; then
    if grep -q "선린" /tmp/seonrin_homepage_check.html; then
      echo "OK: deployed page contains 선린"
      break
    fi
  fi

  sleep 5
done

echo
echo "=== 9. Design lock tag ==="
TAG="seonrin-homepage-design-lock-v1"
if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Tag already exists: $TAG"
else
  git tag -a "$TAG" -m "Lock Seonrin homepage visual design v1"
  git push origin "$TAG"
  echo "Created and pushed tag: $TAG"
fi

echo
echo "=== DONE ==="
echo "Open this:"
echo "$URL"
