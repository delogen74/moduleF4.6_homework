from django.contrib import admin
from django.urls import path, include
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from django.http import HttpResponse


def home(request):
    return HttpResponse(
        """
        <h1>Добро пожаловать в приложение "Рецепты"</h1>
        <p>Перейдите на <a href='/api/schema/swagger-ui/'>Swagger UI</a> для API документации.</p>
        """
    )


urlpatterns = [
    path("", home, name="home"),
    path("admin/", admin.site.urls),
    path("api/", include("recipes_app.urls")),
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    path("api/schema/swagger-ui/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
]
