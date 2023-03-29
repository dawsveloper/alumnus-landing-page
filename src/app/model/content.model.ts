export class ContentModel {
    title! :string;
    subtitle! :string;
    type? :string;
    imageUrl? :string;

    constructor(
        title :string,
        subtitle :string
    ) {
        this.title = title;
        this.subtitle = subtitle;
    }
}