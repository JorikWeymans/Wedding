export class TimelineElementModal
{
    constructor(element)
    {

        this.imageSrc = element.imageSource;
        this.imageWidth = element.imageWidth === undefined ? null : element.imageWidth;
        this.imageTitle = element.imageTitle;


        this.textDate = element.textDate;
        this.textTitle = element.textTitle;
        this.textDescription = element.textDescription;
    }
}



