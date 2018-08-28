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
});
