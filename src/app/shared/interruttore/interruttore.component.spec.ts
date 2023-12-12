import { InterruttoreComponent } from "./interruttore.component";

describe('InterruttoreComponent', () => {

     let comp: InterruttoreComponent;
     beforeEach(() => {
       comp = new InterruttoreComponent();
     });


     it('#cliccami dovrebbe cambiare #acceso', () => {
      expect(comp.acceso)
      .withContext('prima del cliccami()')
      .toBe(false);

      comp.cliccami();

      expect(comp.acceso)
      .withContext('dopo il primo cliccami()')
      .toBe(true);

      comp.cliccami();

      expect(comp.acceso)
      .withContext('dopo il secondo cliccami()')
      .toBe(false);
     });


     it('#cliccami dovrebbe settare il messaggio correttamente', () => {
        expect(comp.messaggio)
          .withContext('prima del primocliccami()')
          .toBe('spento');

        comp.cliccami();

        expect(comp.messaggio)
        .withContext('prima del secondo cliccami()')
        .toBe('acceso');

     });

});
