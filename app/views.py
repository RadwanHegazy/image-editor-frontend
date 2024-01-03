from django.shortcuts import render, redirect
import requests



def home (request) : 
    context = {}

    if request.method == "POST"  :

        data = {
            "brightness" : request.POST['brightness'],
            "contrast" : request.POST['contrast'],
            "saturate" : request.POST['saturate'],
            "has_sepia" : False,
            "has_grayscale" : False,
        }

        has_sepia = request.POST.get('has_sepia',"off")
        has_grayscale = request.POST.get('has_grayscale',"off")

        if has_sepia == "on" : 
            data['has_sepia'] = True
        
        if has_grayscale == "on" : 
            data['has_grayscale'] = True

        files = {
            'image' : request.FILES['image']
        }

        req = requests.post(
            url = "http://127.0.0.1:4444/",
            data = data,
            files = files
        )
        
        output_image = f"http://127.0.0.1:4444{req.json()['image']}"

        return redirect(output_image)

    return render(request,'index.html',context)