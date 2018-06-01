class Emoji {
  constructor(width = 30, height = 10, noStyle = true) {
    this.scene = new ConsoleCanvas.Scene();
    this.renderer = new ConsoleCanvas.Renderer();
    this.renderer.setSize(width, height);
    // 表情字符串每行末尾人工补了个用于划分的字符“t”
    let emojiStr = `
                          ....t
                    ................t
                 .......       .......t
               ........           ...,,.t
             .....                  ......t
             ...                        ...t
           ....                         ....t
         ......                          .....t
         ,,,.                             .....t
        ..,.                                ....t
       .,..                         .       ..,,t
      .,,.     .,----,           .,,-,..     ..,,.t
      ,..     .,-~-~~-,        ..-~~~~-,.     .,,.t
     ,,..     ,~-,..,-~,       ,-~~,,---,     ..,,t
    .-,..    .--.    ,--.     .-:-.   .-~.     .,,.t
    ,,,.     ,~.     ,,~,     ,~~.     ,-,.    ..,-t
   .-,,.    .-~      ..~,     -~.      .--,    ...-.t
   ,,-.     .-~        ~-    .-~,       ,-.      ,,-t
   ,-,.     ,:, ,~:~-  ~,     --. ,-~,  ,-.      ,,-t
   --,      .~,,!===!~.--     -- ~!=**~.,-,      .,-.t
  .--.      .-~;=*===*---     --.**$*=*:--,.   ...,--t
  ,~-.      .-~**=**=*-~,     --~*==**=;--, . . . .-~t
  -~-       .-~!****=*:~,     .-:!*=**=!--      ...-~.t
  ~~-        ,-;******:-.      ,:!*****;--      ...--.t
 .~~-         ,~!****!~,       ,~;!*=**:-.      ...--,t
 .~~-          ,:!**;~.         ,~:;!!;-...     ...--,t
 .~~-           .,~-,.          .,-~:~.        ....--,t
  ~~-                                           ...~-,t
  ~~-                                          ....-~.t
  ~:~                                          ...,-~t
  ~:~.                                   ,.    ...,~~t
  -~~,       ,.                         ,-,    ...,~,t
  .:~~ .     -~,                       .-~.   ....-~.t
   ~:~.      .~:,.                    .-~,   . ..,-~t
   -::,       .:;~.                  .-:-.     ..,~~t
   .::- .      ,~;-.                .~:-.     . .,~-t
    ~~:.    .   ,~:~.             .,~:~   .   ..-,~t
    ,;~~    .    ,~::-.          -:::-.   ..   .~:,t
     -;~. ..   .  .-~::~-,,,,,-~~:::-.    .....-~~.t
     .~:-. ..       ,-~::::::::::~~-.     .. .,~:,t
      ,;:-..          .,--~~:~:~~-.   .  .....-:-t
       -;~-.             ......          ...,-:~.t
        ~:;,.    .                   ... . .-~;,t
         ~~:~ .                      .    .-:;-t
         .;:~~...  .             .. ......-::-t
         .,~;:~~ .. ....        ........,~;:~t
           .~;::~...            ......,-~~~.t
             .:~~~,...   ...  ......,-~:~-t
              .,~::~-,,..........,--~:~,.t
                .,~:~~~~---------~~~-,.t
                   .-~::~~~~::~::~-,.`;
    // 将表情字符串转换为用于渲染的二维数组
    let emojiArray = emojiStr.split('t').map((item) => {
      return item.split('');
    });
    this.emoji = new ConsoleCanvas.Element(emojiArray);
    // 缩放纵坐标为一半后，看上去才是圆的
    this.emoji.scale(1, 0.5);
    this.scene.add(this.emoji);
    this.loop();
  }
  animation() {
    if (this.emoji.position.y > this.renderer.height) {
      this.emoji.position.y = -this.emoji.height();
    }
    this.emoji.position.y++;
  }
  loop() {
    this.renderer.render(this.scene, true, false);
    this.animation();
    setTimeout(() => {
      this.loop();
    }, 100);
  }
}
let emoji = new Emoji(60, 30);