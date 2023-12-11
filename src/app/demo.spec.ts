import { MainService, ValueService } from "./demo";

export class FakeValueService extends ValueService {
  override value = 'faked service value';
}


describe('test demo.ts senza TestBed:', () => {
    describe('ValueService', () => {
        let service: ValueService;

        beforeEach(() => {
          service = new ValueService();
        });

        it('#getValue dovrebbe restituire real value', () => {
          expect(service.getValue()).toBe('real value');
        });

        it('#getObservableValue dovrebbe restituire un valore osservabile ',
          (done: DoneFn) => {
            service.getObservableValue().subscribe(value => {
              expect(value).toBe('observable value');
              done();
            });
        });

        it("#getPromiseValue dovrebbe restituire un valore da una promise",
          (done: DoneFn) => {
           service.getPromiseValue().then(valore => {
              expect(valore).toBe('promise value');
              done();
           })
        });

        it("#getObservableDelayValue dovrebbe restituire una valore con ritardo", (done: DoneFn) => {
            service.getObservableDelayValue().subscribe(valore => {
                expect(valore).toBe('observable delay value');
                done();
            });
        });

    });

    describe('MainService', () => {
      let mainService: MainService;



    it('#getValue dovrebbe restituire real value', () => {
        mainService = new MainService(new ValueService());
        expect(mainService.getValue()).toBe('real value');
      })

      it('#getValue dovrebbe restituire real value', () => {
        mainService = new MainService(new FakeValueService());
        expect(mainService.getValue()).toBe('faked service value');
      })

      it('#getValue da un oggetto fake restituisce fake value', () => {
         const fake = { getValue: () => 'fake value' };
         mainService = new MainService(fake as ValueService);
         expect(mainService.getValue()).toBe('fake value');
      });

      it('#getValue dovrebbe restituire da un oggetto spy stub value', () => {
        const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
        const stubValue = 'stub value';
        valueServiceSpy.getValue.and.returnValue(stubValue);
        mainService = new MainService(valueServiceSpy); // passo lo spy

        expect(mainService.getValue()).toBe(stubValue);

        expect(valueServiceSpy.getValue.calls.count()).toBe(1);

      });



  })
})
