import { AnimationController,Animation } from "@ionic/angular";

export const enterAnimation =(baseEl:HTMLElement, opts?: any): Animation=>{    //estamos creando una animacion propia la cual exportamos ael app.modules(modulo de aplicacion) 

    const DURATION =400; //definimos la variable de duracion de la transicion que haremos con animacion en la pagina

    //se crean estas restriciones para que el sistema no se caiga por completo 
    console.log('baseEl:',baseEl);
    console.log('opts:',opts);

    const animationCtrl = new AnimationController();

    if (opts.direction ==='forward'){                     // forward= delantera
        return animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity',0,1);
    }else {
        const rootAnimation = animationCtrl.create()      //animacion de ingreso 
        .addElement(opts.enteringEl)                      //elemento de entrada
        .duration(DURATION)                              //duracion de la transicion
        .easing('ease-in')                               //efecto transicion de entrada
        .fromTo('opacity',0,1);                          //opacidad

        const leavingAnimation = animationCtrl.create() //animacion de volver atras 
        .addElement(opts.leavingEl)                     //elemento de salida 
        .duration(DURATION)                             //duracion de la transicion
        .easing('ease-out')                             //efecto de trancision salida
        .fromTo('opacity',1,0);                         //opacidad

        return animationCtrl.create().addAnimation([rootAnimation, leavingAnimation]);
    }
    
}