export function foreach(cls, func) {
  const elements = document.getElementsByClassName(cls);
  Array.from(elements).forEach((element) => {
    func(element);
  });
}

