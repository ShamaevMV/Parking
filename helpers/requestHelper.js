module.exports = {
    beautify: function beautify(someshit) {
        let arr = someshit.filter(
          (item) => {return !!item.name}
        );
        return arr;
      }
}