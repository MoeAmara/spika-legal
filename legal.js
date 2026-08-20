(function () {
  "use strict";

  var paper = document.querySelector(".paper");
  if (!paper) return;

  var headings = paper.querySelectorAll("h2");
  if (!headings.length) return;

  var isAr = document.documentElement.lang === "ar";
  var toc = document.createElement("details");
  toc.className = "doc-toc";
  toc.setAttribute("aria-label", isAr ? "المحتويات" : "Contents");

  var summary = document.createElement("summary");
  summary.textContent = isAr ? "المحتويات" : "Table of contents";
  toc.appendChild(summary);

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
