from django.urls import path
from .views import ProductListCreateView, ProductDetailView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('products/', ProductListCreateView.as_view(), name='product-list-create'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
]

urlpatterns += staticfiles_urlpatterns()