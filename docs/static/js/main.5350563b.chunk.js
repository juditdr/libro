(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{29:function(e,a,t){},31:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var s=t(1),n=t.n(s),i=t(16),o=t.n(i),r=(t(29),t(12),t(17),t(31),t(0));var c=function(e){return Object(r.jsxs)("div",{className:"opinion",children:[Object(r.jsx)("img",{src:"".concat(".").concat(e.image)}),Object(r.jsx)("div",{className:"text",children:e.text}),Object(r.jsx)("div",{className:"name",children:e.name}),Object(r.jsx)("div",{className:"description",children:e.description})]})},l=[{image:"/images/opinion/jose_luis.jpeg",text:'"Cuando en lo que se crea se pone el coraz\xf3n, el resultado es el amor convertido en arte. As\xed es la obra de Judit: todo coraz\xf3n, adornado de un extraordinario talento."',name:"Jos\xe9 Luis Jim\xe9nez, 59 a\xf1os (Zaragoza)",description:"Abogado y profesor universitario de Derecho"},{image:"/images/opinion/alain.jpeg",text:'"Deber\xedamos usar todo lo que escribe y transmite Judit como un medio para tener m\xe1s gratitud en la vida y para compartir la felicidad que necesitamos todos los d\xedas."',name:"Alain Metelli, 38 a\xf1os (Madrid)",description:"Director de la agencia de comunicaci\xf3n ICA Global Media"},{image:"/images/opinion/rosa.jpg",text:'"Judit escribe por amor -con trascendencia- a la vida. Con delicadeza, transparencia y dulzura, transmite de manera sublime la conjugaci\xf3n del verbo amar. Emocionantes versos que cautivan por su sencillez, pureza y belleza."',name:"Rosa Tomas, 27 a\xf1os (Barcelona)",description:"Auxiliar de enfermer\xeda"},{image:"/images/opinion/chelsea.jpg",text:'"\xa1Sin desperdicio! Cada palabra, cada frase y cada poes\xeda son inmensas, llenas de valor y amor. Sin lugar a dudas, son escritos para los amantes de la lectura apasionada y profunda."',name:"Chelsea Basey, 20 a\xf1os (Barcelona)",description:"Modelo y estudiante"},{image:"/images/opinion/ariadna.jpeg",text:'"Una capacidad extraordinaria para tejer sentimientos. Amor y lealtad en cada texto. Cualidades que solo pueden poseer las personas que todo lo que hacen es por amor a los dem\xe1s."',name:"Ariadna Figueras, 24 a\xf1os (Gerona)",description:"Estudiante"}],d=t(18),m=t(19),u=t(9),j=t(24),p=t(23),b=function(e){Object(j.a)(t,e);var a=Object(p.a)(t);function t(e){var s;return Object(d.a)(this,t),(s=a.call(this,e)).submitForm=s.submitForm.bind(Object(u.a)(s)),s.state={status:""},s}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state.status;return Object(r.jsxs)(r.Fragment,{children:[""===e||"ERROR"===e?Object(r.jsxs)("form",{onSubmit:this.submitForm,action:"https://formspree.io/f/mbjpnyaz",method:"POST",children:[Object(r.jsx)("input",{type:"email",name:"email",required:!0,placeholder:"E-mail usado en la compra"}),Object(r.jsx)("input",{type:"text",name:"name",required:!0,placeholder:"Nombre"}),Object(r.jsx)("button",{children:"Enviar"})]}):null,"SUCCESS"===e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("p",{children:"\xa1Gracias!"}),Object(r.jsx)("p",{className:"thanks-tex2",children:"Hemos recibido tu petici\xf3n correctamente."})]}):null,"ERROR"===e?Object(r.jsx)("p",{children:"Ooops! Ha habido un error. Por favor, int\xe9ntalo de nuevo m\xe1s tarde."}):null]})}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,s=new FormData(t),n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},n.send(s)}}]),t}(n.a.Component);var h=function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"thanks",children:[Object(r.jsx)("img",{className:"thanks-img",src:"".concat(".","/images/cover.jpg")}),Object(r.jsxs)("div",{className:"thanks-text",children:[Object(r.jsx)("h3",{children:"\xa1Muchas gracias por tu pedido!"}),Object(r.jsx)("p",{children:"En breve, recibir\xe1s m\xe1s informaci\xf3n en el correo electr\xf3nico especificado durante el proceso de compra."}),Object(r.jsx)("p",{children:"Si deseas una dedicatoria personal por parte de la autora, por favor, rellena el siguiente formulario."}),Object(r.jsx)(b,{})]})]})})},O=t(21),x=t(2),g=t(20);Object(g.a)("pk_live_51IS9OrIo9LMmf0BW3JxlFJlI8LZp9itwT8ImGOnXOqa3PLNe5lsYJdK6CqjncHywCfHFWjsJ0DrfFmOnSohBOiPw00jlRpvQVV",{apiVersion:"2020-08-27"});var v=function(){return Object(r.jsx)(O.a,{children:Object(r.jsxs)(x.c,{children:[Object(r.jsx)(x.a,{path:"/thanks",children:Object(r.jsx)(h,{})}),Object(r.jsx)(x.a,{path:"/",children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("section",{className:"book-cover",style:{backgroundImage:"url(".concat(".","/images/book.jpeg)")},children:Object(r.jsx)("p",{className:"main-title",children:"PREFIERO ECHARTE DE MENOS A NO HABERTE CONOCIDO"})}),Object(r.jsxs)("section",{className:"opinions",children:[Object(r.jsx)("p",{className:"section-title",children:"OPINI\xd3N DE LOS LECTORES"}),Object(r.jsx)("div",{className:"opinions-content",children:l.map((function(e,a){return Object(r.jsx)(c,{image:e.image,text:e.text,name:e.name,description:e.description},a)}))})]}),Object(r.jsxs)("section",{className:"author",children:[Object(r.jsx)("span",{className:"section-title",children:Object(r.jsx)("p",{children:"Autora"})}),Object(r.jsxs)("div",{className:"author-content",children:[Object(r.jsx)("img",{className:"author-img",src:"".concat(".","/images/author/judit.jpeg")}),Object(r.jsx)("span",{className:"author-text",children:"Judit Deig Ramos (Madrid, 1994). Periodista, polit\xf3loga y jurista. Cuenta con diversas publicaciones en medios auton\xf3micos, como El Peri\xf3dico, y nacionales, como el diario ABC, para los que ha elaborado reportajes y entrevistas de diferentes tem\xe1ticas, entre las que destacan la cultura y la econom\xeda."})]})]}),Object(r.jsxs)("section",{className:"text-book-img",style:{backgroundImage:"url(".concat(".","/images/text.png)")},children:[Object(r.jsxs)("div",{className:"buy-btn",role:"link",children:[Object(r.jsx)("img",{className:"buy-btn-img",src:"".concat(".","/images/cover.jpg")}),Object(r.jsx)("span",{className:"buy-btn-text",children:"No disponible."})]}),Object(r.jsx)("p",{className:"text-book",children:"Este libro descubre, entre sus l\xedneas, el anhelo vehemente de su autora por poner en boga la ternura. Sus p\xe1ginas hablan -a veces gritan, otras susurran- acerca del miedo y la calma, las despedidas y los reencuentros, la risa o la vida. Y, sobre todo, de la incondicionalidad por alguien."})]}),Object(r.jsx)("footer",{children:Object(r.jsx)("p",{children:"\xa9 Todos los derechos reservados 2021"})})]})})]})})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),s(e),n(e),i(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(v,{})}),document.getElementById("root")),f()}},[[38,1,2]]]);
//# sourceMappingURL=main.5350563b.chunk.js.map