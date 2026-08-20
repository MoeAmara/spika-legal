(function () {
  "use strict";

  var paper = document.querySelector(".paper");
  if (!paper) return;

  var headings = paper.querySelectorAll("h2");
  if (!headings.length) return;

  var toc = document.createElement("nav");
  toc.className = "doc-toc";
  toc.setAttribute("aria-label", document.documentElement.lang === "ar" ? "المحتويات" : "Contents");

  var title = document.createElement("p");
  title.className = "doc-toc-title";
  title.textContent = document.documentElement.lang === "ar" ? "المحتويات" : "Contents";
  toc.appendChild(title);

  var list = document.createElement("ol");
  list.className = "doc-toc-list";

  headings.forEach(function (heading, index) {
    var id = heading.id || "section-" + (index + 1);
    heading.id = id;

    var item = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = heading.textContent.replace(/^\d+\.\s*/, "");
    item.appendChild(link);
    list.appendChild(item);
  });

  toc.appendChild(list);
  paper.parentNode.insertBefore(toc, paper);
})();
