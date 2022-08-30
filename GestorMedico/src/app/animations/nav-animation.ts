import { AnimationController,Animation } from "@ionic/angular";

export const enterAnimation =(baseEl:HTMLElement, opts?: any): Animation=>{    //estamos creando una animacion propia la cual exportamos ael app.modules(modulo de aplicacion) 

    const DURATION =400; //definimos la duracion de la transicion que haremos con animacion en la pagina

    //se crean estas restriciones para que el sistema no se caiga por completo 
    console.log('baseEl:',baseEl);
    console.log('opts:',opts);

    const animationCtrl = new AnimationController();

    if (opts.direction ==='forward'){
        return animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity',0,1);
    }else{
        const rootAnimation = animationCtrl.create() //animacion de ingreso 
        .addElement(opts.enteringEl) 
        .duration(DURATION)                              //duracion de la transicion
        .easing('ease-in')
        .fromTo('opacity',0,1);

        const leavingAnimation = animationCtrl.create() //animacion de volver atras 
        .addElement(opts.LeavingEl)
        .duration(DURATION)                             //duracion de la transicion
        .easing('ease-out')
        .fromTo('opacity',0,1);

        return animationCtrl.create().addAnimation([rootAnimation,leavingAnimation]);
    }
    
}