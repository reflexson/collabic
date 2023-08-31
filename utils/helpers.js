module.exports = {
  format_date: (date) => {
    return date.toLocaleDateString();
  },
  format_timestamp:(timestamp)=>{
    commentCueMin = Math.floor(timestamp / 60);
    commentCueSec = timestamp % 60;
    return `${commentCueMin} min ${commentCueSec} sec`;


  }
};
