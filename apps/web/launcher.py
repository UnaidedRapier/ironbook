import os

from ironbook.settings import DJANGO_HOST

os.system(
    f"python -m uvicorn ironbook.asgi:application --host {DJANGO_HOST} --port 8080"
)
