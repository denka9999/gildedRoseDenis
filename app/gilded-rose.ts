export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }


  checkBacksStageQuality(quality1: number,date1: number): number {
    let aux = quality1
    if (date1 > 0) {
      aux = this.increaseQuality(aux);
      if (date1 < 11) {
        aux = this.increaseQuality(aux);
        if (date1 < 6) {
          aux = this.increaseQuality(aux);
        }
      }
      return aux;
    } else {
      return 0
    }
  }

  checkAgedBriefQuality(quality1: number, date1: number) {
    let aux = quality1;
    aux = this.increaseQuality(aux);
    if (date1 < 1) {
      aux = this.increaseQuality(aux);
      return aux;
    }else{
      return aux
    }
  }

  increaseQuality(elem: number): number {
    let aux = elem;
    if (aux < 50) {
      aux = aux + 1;
      return aux;
    }
    return aux;
  }

  reduceQuality(elem: number, itemName: string, itemDate: number): number {
    let aux = elem;
    if (itemDate > -1) {
      if (aux > 0) {
        aux = aux - 1;
        if (itemName == 'Conjured Mana Cake') {
          if (aux > 0) {
            aux = aux - 1
          } else {
            return aux;
          }
        }
      }
      return aux;
    } else {
      aux = 0;
      return aux;
    }
  }


  decreaseDate(elem: number): number {
    let aux = elem - 1;
    return aux;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      switch (this.items[i].name) {
        case('Backstage passes to a TAFKAL80ETC concert'):
          this.items[i].quality = this.checkBacksStageQuality(this.items[i].quality, this.items[i].sellIn);
          this.items[i].sellIn = this.decreaseDate(this.items[i].sellIn);
          break;
        case('Aged Brie'):
          this.items[i].quality = this.checkAgedBriefQuality(this.items[i].quality, this.items[i].sellIn);
          this.items[i].sellIn = this.decreaseDate(this.items[i].sellIn);
          break;
        case('Elixir of the Mongoose'):
          this.items[i].quality = this.reduceQuality(this.items[i].quality, this.items[i].name, this.items[i].sellIn);
          this.items[i].sellIn = this.decreaseDate(this.items[i].sellIn);
          break;
        case('Conjured Mana Cake'):
          this.items[i].quality = this.reduceQuality(this.items[i].quality, this.items[i].name, this.items[i].sellIn);
          this.items[i].sellIn = this.decreaseDate(this.items[i].sellIn);
          break;
        case('+5 Dexterity Vest'):
          this.items[i].quality = this.reduceQuality(this.items[i].quality, this.items[i].name, this.items[i].sellIn);
          this.items[i].sellIn = this.decreaseDate(this.items[i].sellIn);
          break;
        default:
          break;
      }


      /*      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {  // diferente de Aged Brie y BackStage
              if (this.items[i].quality > 0) {                                                                             // si su calidad es mayor que 0
                if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {                                                   // si es diferente de sulfuras
                  this.items[i].quality = this.items[i].quality - 1                                                         // su calidad baja 1 --> solo puede ser los Conjured o Dextity
                }
              }
            } else {                                                                                                        // aqui es AgedBrie y Backstage
              if (this.items[i].quality < 50) {                                                                             // si la calidad es menor que 50
                this.items[i].quality = this.items[i].quality + 1                                                           // la calidad aumenta 1
                if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {                                    // Si se llama BackStage en este caso le aumenta en funcion de los dias
                  if (this.items[i].sellIn < 11) {
                    if (this.items[i].quality < 50) {                                                                       // SUbe y comprueba siempre que el maximo sea 50
                      this.items[i].quality = this.items[i].quality + 1
                    }
                  }
                  if (this.items[i].sellIn < 6) {
                    if (this.items[i].quality < 50) {
                      this.items[i].quality = this.items[i].quality + 1
                    }
                  }
                }
              }
            }
            if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {                                                         // Si se llama Sulfuras
              this.items[i].sellIn = this.items[i].sellIn - 1;                                                                // le baja los dias de venta en 1
            }
            if (this.items[i].sellIn < 0) {                                                                                    // Si sus dias de venta son menores que 0
              if (this.items[i].name != 'Aged Brie') {
                if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
                  if (this.items[i].quality > 0) {                                                                              // si su calidad es mayor que 0, bajale uno a Conjured y Dextetity
                    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                      this.items[i].quality = this.items[i].quality - 1
                    }
                  }
                } else {
                  this.items[i].quality = this.items[i].quality - this.items[i].quality                                       // Si por el contrario es Backstage,su valor de venta baja a 0
                }
              } else {                                                                                                        // Si es Aged Brie y su calidad es <50
                if (this.items[i].quality < 50) {
                  this.items[i].quality = this.items[i].quality + 1                                                           // Sumale 1 hasta que llegue a 50
                }
              }
            }*/
    }

    return this.items;
  }
}
