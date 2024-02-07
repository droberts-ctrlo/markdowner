import Markdowner from "./markdowner";

describe("Markdowner", () => {
  it("should transform markdown to html", () => {
    const markdowner = new Markdowner();
    const result = markdowner.transform("# Hello World");
    expect(result).toBe("<h1 id=\"hello-world\">Hello World</h1>\n");
  });

  it("should return undefined when undefined is given", ()=>{
    const markdowner = new Markdowner();
    const result = markdowner.transform(undefined);
    expect(result).toBe(undefined);
  });

  it("should return undefined when null is given", ()=>{
    const markdowner = new Markdowner();
    const result = markdowner.transform(null);
    expect(result).toBe(undefined);
  });

  it("should return undefined when empty string is given", ()=>{
    const markdowner = new Markdowner();
    const result = markdowner.transform("");
    expect(result).toBe(undefined);
  });

  it("should return with line breaks when line breaks are present", ()=>{
    const markdowner = new Markdowner();
    const result = markdowner.transform("Hello\nWorld");
    expect(result).toBe("<p>Hello<br>\nWorld</p>\n");
  });
});
