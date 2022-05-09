import {SubmitFeedbackUseCase} from "./submit-feedback-use-case";


const submitFeedback = new SubmitFeedbackUseCase(
    { create: async () => {}},
    { sendMail: async () => {}}
)


describe('Submit feedback', ( )=>{
    it('should be able to submit a feedback', async ()=>{
          await  expect (submitFeedback.execute({
                type:'BUG',
                comment:'EXAMPLE COMMENT',
                screenshot:'data:image/png;base64,9ASIDUHASO8DUH',
            })).resolves.not.toThrow();
        
    });
});


it('should not be able to submit a feedback without a type', async ()=>{
      await  expect (submitFeedback.execute({
            type:'',
            comment:'EXAMPLE COMMENT',
            screenshot:'data:image/png;base64,9ASIDUHASO8DUH',
        })).rejects.toThrow();
    
});


it('should not be able to submit a feedback without a commment', async ()=>{
    await  expect (submitFeedback.execute({
          type:'bug',
          comment:'',
          screenshot:'data:image/png;base64,9ASIDUHASO8DUH',
      })).rejects.toThrow();
  
});


it('should not be able to submit a feedback with an invalid format', async ()=>{
    await  expect (submitFeedback.execute({
          type:'BUG',
          comment:'EXAMPLE COMMENT',
          screenshot:'SDAS.JPG',
      })).rejects.toThrow();
  
});


