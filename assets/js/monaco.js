require(["vs/editor/editor.main"], function () {

    const editor = monaco.editor.create(
        document.getElementById("monaco-editor"),
        {
            value: `module counter (
    input logic clk,
    input logic rst_n,
    output logic [7:0] count
);

always_ff @(posedge clk)
    if (!rst_n)
        count <= 0;
    else
        count <= count + 1;

endmodule`,

            language: "systemverilog",
            theme: "vs-dark",
            automaticLayout: true,
            minimap: { enabled: false },
            fontSize: 14
        }
    );

    document.getElementById("run-btn")
        .addEventListener("click", () => {
            document.getElementById("code-output").textContent =
                editor.getValue();
        });

    document.getElementById("clear-btn")
        .addEventListener("click", () => {
            editor.setValue("");
        });

    let darkTheme = true;

    document.getElementById("theme-btn")
        .addEventListener("click", () => {
            darkTheme = !darkTheme;
            monaco.editor.setTheme(
                darkTheme ? "vs-dark" : "vs"
            );
        });
});