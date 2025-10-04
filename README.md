## HIGH LEVEL WORKFLOW

1. User uploads skin photo (React frontend).

2. Node.js backend receives request → forwards image to FastAPI (ML inference server).

3. FastAPI → runs ML model → returns predicted condition(s) + confidence.

4. Node.js → queries GenAI with predicted disease + curated medical guidelines → returns treatment plan.

5. Node.js → calls Google Maps / Practo API → fetches nearby doctors.

6. Frontend → displays disease prediction, cure suggestions, and doctor list.