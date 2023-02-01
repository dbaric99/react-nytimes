const formatDateToLocaleString = (date, chart = false) => {
    const locale = "en-US";
    const dateObj = date instanceof String ? date : new Date(date);
  
    var options = { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    };
  
    if (chart === true) { options.month = '2-digit'; }
    let finalDate = dateObj.toLocaleDateString(locale, options);
    finalDate = finalDate.split('/').join('.');
    return finalDate;
};

export const generalHelper = {
    formatDateToLocaleString,
};