ml-fastapi-genai/
│── pyproject.toml        # uv project config & deps
│── README.md             # project documentation
│── .env                  # environment variables (API keys etc.)
│── app/                  
│   ├── __init__.py
│   ├── main.py           # FastAPI entry point
│   ├── routes/           # API endpoints
│   │   └── genai.py      # routes for GenAI features
│   ├── services/         # ML/GenAI business logic
│   │   ├── ml_model.py   # ML model loading/prediction
│   │   └── genai_service.py
│   ├── models/           # Pydantic models for requests/responses
│   └── utils/            # helper functions (e.g., preprocessing)
│
│── notebooks/            # Jupyter notebooks for experiments
│── data/                 # raw/processed data (gitignore large files)
│── scripts/              # training scripts, CLI utilities
│── tests/                # pytest unit tests
