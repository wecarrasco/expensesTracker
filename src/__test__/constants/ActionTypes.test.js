import * as type from '../../constants/ActionTypes';

describe('Action Types', () => {
  it('should receive INCOME action type', () => {
    expect(type.INCOME).toBe('INCOME');
  });

  it('should receive EXPENSE action type', () => {
    expect(type.EXPENSE).toBe('EXPENSE');
  });

  it('should receive NEW_CARD action type', () => {
    expect(type.NEW_CARD).toBe('NEW_CARD');
  });

  it('should receive CARD_EXPENSE action type', () => {
    expect(type.CARD_EXPENSE).toBe('CARD_EXPENSE');
  });

  it('should receive SET_BUDGET action type', () => {
    expect(type.SET_BUDGET).toBe('SET_BUDGET');
  });

  it('should receive SET_DAILY_AVERAGE action type', () => {
    expect(type.SET_DAILY_AVERAGE).toBe('SET_DAILY_AVERAGE');
  });

  it('should receive SET_INDUCTION_SETTINGS', () => {
    expect(type.SET_INDUCTION_SETTINGS).toEqual('SET_INDUCTION_SETTINGS');
  });
});
