# insultjs

<p align="center">
   <img src="https://i.ibb.co/CHD6w8V/R6MGKHH.png" height='100px'/>  
</p>
<h1 align="center">insultjs</h1>
<p align="center">Insultos para discord.js en Castellano</p>

## Que es? 🔍
Es un npm para discord.js, el cual se encarga de revisar si los mensajes que manda la gente son insultos o no para conseguir servidores más limpios.


## Instalación 🔑
```
npm init -y

npm i discord.js

npm i insultjs
```

## Ejemplo 🧧
```javascript
let {insults} = require("insultjs"); // Importa la propiedad insults de el modulo insultjs

client.on("message", async (message) => {

  const args = message.content.trim().split(/ +/g); // No hace falta que lo definas si ya lo tienes definido
  
  let found = insults.find(element => element == args[0].toLowerCase()); // Revisa si el mensaje enviado contiene un insulto
  
  if (message.content.toLowerCase().includes(found)) {
  
    // Tu codigo aquí
    
  }
});

```

## Versiones 📦
<h1><a href="https://www.npmjs.com/package/insultjs?activeTab=versions">V 1.1.2</a></h1>
<p><b>Cambios-></b> Se han añadido más insultos y solucionado los errores.</p>

## 📤 Redes de insultjs
- [Website](https://elmarcz.github.io/portfolio/)
- [Discord](https://discord.gg/gJRs9U6WyJ)


### 👤 Stay in touch
- [Website](https://elmarcz.github.io/portfolio/)
- [Twitter](https://twitter.com/MarcMedrano15)
- [Discord](https://discord.com/invite/zPSYDGVXxx)
- [Instagram](https://www.instagram.com/marcmedranoz/)

### Made with ❤ by Marc Medrano
