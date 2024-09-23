from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from datetime import datetime, date
# Create your views here.
def signin(request):
    if request.method == 'POST':
        
        cpf = request.POST.get('cpf')
        senha = request.POST.get('password')
        email = request.POST.get('email')
        data_original = request.POST.get('data_nasc')
        # --- capturar o restante dos atributos

        data_convertida = datetime.strptime(data_original, "%d/%m/%Y")

        idade = (date.today() - data_convertida.date()).days // 365

        user = User.objects.create_user(username=cpf, email=email, password=senha)

        user.save()
        return redirect('login')
    return render(request, './signin.html')

def home(request):
    if request.user.is_authenticated:
        usuarios = []

        for indice, user in enumerate(User.objects.all()):
            usuarios.append((indice + 1, user))

        return render(request, './home.html', {'users': usuarios})
    return redirect('login')