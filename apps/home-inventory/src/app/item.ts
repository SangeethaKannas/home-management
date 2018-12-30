export class Item {
  constructor(
    public id: number,
    public name: string,
    public quantity?: number,
    public location?: string,
    public source?: string,
    public material?: string,
    public dimensions?: string,
    public age?: number,
    public usedDaily?: boolean,
    public usedIn?: string,
    public value?: number
  ) {}
}
