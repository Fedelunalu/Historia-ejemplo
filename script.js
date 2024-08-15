// Historia interactiva con múltiples escenas
const story = {
    start: {
        text: "Un grupo de estudiantes aventureros decide explorar un bosque misterioso que ha sido objeto de leyendas durante generaciones. Al llegar a una bifurcación en el camino, deben decidir cuál de los dos senderos tomar: uno oscuro y sinuoso, el otro luminoso y recto. Cada camino promete una aventura diferente.",
        options: {
            option1: "Tomar el camino oscuro y sinuoso, conocido por sus leyendas ominosas.",
            option2: "Tomar el camino luminoso y recto, aparentemente más seguro."
        }
    },
    darkPath1: {
        text: "A medida que avanzan por el camino oscuro, el ambiente se vuelve cada vez más inquietante. Los árboles altos parecen susurrar entre sí y la luz de la luna apenas penetra a través del espeso follaje. Un extraño resplandor comienza a iluminar el sendero. De repente, un grupo de sombras se mueve rápidamente entre los árboles. ¿Cómo reaccionan?",
        options: {
            option1: "Investigar las sombras y el resplandor.",
            option2: "Seguir caminando rápidamente sin detenerse."
        }
    },
    darkPath2: {
        text: "Al investigar el resplandor, descubren un antiguo altar en un claro del bosque. El altar está cubierto de runas y símbolos desconocidos, y en su centro hay un libro antiguo con una cubierta desgastada. Un aura misteriosa emana del libro. ¿Qué hacen?",
        options: {
            option1: "Leer el libro para descubrir sus secretos.",
            option2: "Dejar el libro en el altar y continuar explorando el claro."
        }
    },
    darkPath3: {
        text: "Al abrir el libro, una ola de energía oscura envuelve el claro, causando que el ambiente se torne aún más perturbador. Unas sombras etéreas comienzan a materializarse alrededor de los estudiantes. La presencia de algo maligno se siente en el aire. ¿Cómo enfrentan la situación?",
        options: {
            option1: "Intentar comunicarse con las sombras y averiguar qué quieren.",
            option2: "Tratar de escapar del claro lo más rápido posible."
        }
    },
    darkPath4: {
        text: "Las sombras parecen estar vinculadas a una antigua maldición. La presión en el aire aumenta y el bosque se oscurece aún más. Los estudiantes ven una cabaña en la distancia que podría ofrecer refugio. ¿Qué hacen?",
        options: {
            option1: "Buscar refugio en la cabaña y esperar a que pase la tormenta.",
            option2: "Seguir adelante, adentrándose aún más en la oscuridad del bosque."
        }
    },
    darkPath5: {
        text: "La cabaña parece estar desierta, pero al entrar, encuentran un templo subterráneo con inscripciones antiguas en sus paredes. Las inscripciones parecen contar la historia de un antiguo ritual. ¿Qué hacen?",
        options: {
            option1: "Tratar de descifrar las inscripciones y aprender sobre el ritual.",
            option2: "Explorar el interior del templo en busca de otros secretos."
        }
    },
    darkPath6: {
        text: "Las inscripciones revelan que el ritual tiene el poder de desatar una fuerza inmensa, tanto buena como mala, dependiendo de cómo se realice. ¿Participan en el ritual para intentar controlar la fuerza?",
        options: {
            option1: "Participar en el ritual y asumir el riesgo de desatar la fuerza.",
            option2: "Ignorar el ritual y buscar una salida del templo."
        }
    },
    lightPath1: {
        text: "El camino luminoso se abre a un paisaje encantador con árboles de hojas doradas y un aire fresco y limpio. De repente, encuentran a una bruja anciana que parece estar esperando su llegada. Ella les ofrece un trato mágico: les dará poderes a cambio de una promesa. ¿Qué harán?",
        options: {
            option1: "Aceptar el trato de la bruja y recibir los poderes mágicos.",
            option2: "Rechazar el trato y continuar explorando el bosque sin poderes."
        }
    },
    lightPath2: {
        text: "Al aceptar el trato, los estudiantes reciben poderes mágicos que les permiten controlar elementos del bosque y comunicarse con sus criaturas. ¿Cómo utilizan estos nuevos poderes?",
        options: {
            option1: "Explorar el bosque con sus nuevos poderes para descubrir secretos ocultos.",
            option2: "Regresar a casa y usar los poderes para ayudar a las personas en su comunidad."
        }
    },
    lightPath3: {
        text: "Si rechazan el trato de la bruja, encuentran un lago cristalino en el bosque. El lago parece tener propiedades curativas y mágicas. ¿Qué deciden hacer?",
        options: {
            option1: "Nadar en el lago y disfrutar de sus propiedades mágicas.",
            option2: "Descansar en la orilla y disfrutar del paisaje mientras reflexionan sobre su aventura."
        }
    },
    lightPath4: {
        text: "Mientras descansan en la orilla del lago, encuentran una cabaña abandonada cercana. La cabaña parece haber estado deshabitada durante mucho tiempo, pero hay signos de actividad reciente. ¿Qué hacen?",
        options: {
            option1: "Entrar en la cabaña para investigar.",
            option2: "Ignorar la cabaña y seguir explorando el bosque."
        }
    },
    lightPath5: {
        text: "Dentro de la cabaña, encuentran un viejo diario cubierto de polvo. El diario está lleno de escritos sobre las leyendas del bosque y las criaturas mágicas que habitan en él. ¿Qué hacen?",
        options: {
            option1: "Leer el diario para descubrir más sobre el bosque.",
            option2: "Guardar el diario y continuar explorando el bosque."
        }
    },
    lightPath6: {
        text: "El diario revela detalles sobre un antiguo pacto entre humanos y seres mágicos del bosque. ¿Qué deciden hacer con esta información?",
        options: {
            option1: "Investigar más sobre el pacto y cómo podría afectarlos.",
            option2: "Compartir la información con otros y regresar a casa."
        }
    },
    end: {
        text: "Fin de la historia. Gracias por jugar.",
        options: {}
    }
};

// Inicializar la historia
let currentScene = 'start';

function continueStory(option) {
    const title = document.getElementById('story-title');
    const text = document.getElementById('story-text');
    const button1 = document.getElementById('option1');
    const button2 = document.getElementById('option2');

    // Transiciones entre escenas
    const transitions = {
        start: {
            option1: 'darkPath1',
            option2: 'lightPath1'
        },
        darkPath1: {
            option1: 'darkPath2',
            option2: 'darkPath2'
        },
        darkPath2: {
            option1: 'darkPath3',
            option2: 'darkPath4'
        },
        darkPath3: {
            option1: 'darkPath4',
            option2: 'darkPath4'
        },
        darkPath4: {
            option1: 'darkPath5',
            option2: 'darkPath6'
        },
        darkPath5: {
            option1: 'darkPath6',
            option2: 'darkPath6'
        },
        darkPath6: {
            option1: 'end',
            option2: 'end'
        },
        lightPath1: {
            option1: 'lightPath2',
            option2: 'lightPath3'
        },
        lightPath2: {
            option1: 'lightPath4',
            option2: 'lightPath4'
        },
        lightPath3: {
            option1: 'lightPath5',
            option2: 'lightPath6'
        },
        lightPath4: {
            option1: 'lightPath6',
            option2: 'lightPath6'
        },
        lightPath5: {
            option1: 'lightPath6',
            option2: 'lightPath6'
        },
        lightPath6: {
            option1: 'end',
            option2: 'end'
        }
    };

    // Actualizar escena actual
    const nextScene = transitions[currentScene] ? transitions[currentScene][option] : null;

    if (nextScene && story[nextScene]) {
        currentScene = nextScene;
        title.innerText = '';  // Limpia el título para pruebas
        text.innerText = story[currentScene].text;
        button1.innerText = story[currentScene].options.option1 || '';
        button2.innerText = story[currentScene].options.option2 || '';
        button1.style.display = story[currentScene].options.option1 ? 'inline-block' : 'none';
        button2.style.display = story[currentScene].options.option2 ? 'inline-block' : 'none';
        button1.onclick = () => continueStory('option1');
        button2.onclick = () => continueStory('option2');
    } else {
        title.innerText = 'Fin de la historia';
        text.innerText = 'Gracias por jugar.';
        button1.style.display = 'none';
        button2.style.display = 'none';
    }
}

// Inicializar la historia en la carga de la página
window.onload = () => {
    continueStory('option1');  // Usa 'option1' para probar desde la primera opción
};
