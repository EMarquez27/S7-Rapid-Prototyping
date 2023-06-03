class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('sceneone');   
    }

    preload ()
    {
        this.load.image('snail', 'assets/snail.jpg');
        this.load.image('roly', 'assets/roly.png');
    }

    create () 
    {
        this.cameras.main.setBackgroundColor('#737373');
        this.add.text(90, 200, "Roly Poly: To the End", {color: '#FFFFFF'}).setFontSize(25);
        this.input.on('pointerdown', () => this.scene.start('scene2'));
        
    }

    update () 
    {
       
    }
}

// victory screen
class Scene2 extends Phaser.Scene
{
    constructor ()
    {
        super({ key: 'scene2' });
    }  

    create ()
    {
        let box = this.add.text(10, 10,
`*Placeholder Scene for Victory screen
`
                );
    }
}


let config = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
    },

    scene: [Scene1, Scene2],
    title: "Prototype",
    physics: {
        default: 'arcade',
        arcade: {
           // gravity: {y: 300}
        }
    }
}

const game = new Phaser.Game(config);
