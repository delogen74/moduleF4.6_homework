from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Category, Recipe
from .serializers import CategorySerializer, RecipeSerializer


class CategoryViewSet(ReadOnlyModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class RecipeViewSet(ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

