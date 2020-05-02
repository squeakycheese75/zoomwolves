// describe("FurnitureAssessmentForm.jsx", () => {
//   it("Calls onBack when selecting back", async () => {
//     const fn = jest.fn();
//     const { getByText } = render(
//       <FurnitureAssessmentForm onBack={fn} onSubmit={jest.fn()} />
//     );
//     const backButton = getByText("Back");
//     fireEvent.click(backButton);
//     expect(fn).toBeCalled();
//   });

//   it("Calls onSubmit when selecting submit", async () => {
//     const fn = jest.fn();
//     const { container } = render(
//       <FurnitureAssessmentForm onBack={jest.fn()} onSubmit={fn} />
//     );

//     const radioButtons = container.querySelectorAll("input[type=radio]");
//     radioButtons.forEach((rb) =>
//       fireEvent.change(rb, { target: { checked: true } })
//     );

//     fireEvent.submit(container.querySelector("form"));

//     await wait(() => expect(fn).toBeCalled());
//   });
// });
