let extensao = ".png"


switch (extensao){


    case ".md" :
    case ".txt" :
    console.log ("executando: Editor de Texto")
        break
    case ".jpg":
    case ".png":    
    case ".gif" : 
    console.log ("Executando: Visualizador de Imagen: Editor de Texto")
        break
    
    case ".mp4" :
    case ".mkv" :
        console.log ("Executando: Reprodutor de Vídeo")
            break
    default :
    console.log("Erro: Nenhum aplicativo padrão associado a este formato")
   break




}