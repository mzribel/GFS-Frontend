export function stringToDate(_date:string,_format:string="dd/MM/yyyy",_delimiter:string="/")
{
    let formatLowerCase=_format.toLowerCase();
    let formatItems=formatLowerCase.split(_delimiter);
    let dateItems=_date.split(_delimiter);
    let monthIndex=formatItems.indexOf("mm");
    let dayIndex=formatItems.indexOf("dd");
    let yearIndex=formatItems.indexOf("yyyy");
    let month=parseInt(dateItems[monthIndex]);
    month-=1;
    // @ts-ignore
    let formatedDate = new Date(Number(dateItems[yearIndex]),month,dateItems[dayIndex]);
    return formatedDate;
}