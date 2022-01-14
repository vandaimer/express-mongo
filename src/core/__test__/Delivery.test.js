import DeliveryCore from '../Delivery';


describe('core.Delivery', () => {
  const mockDelivery = {
    counts: [1, 2],
  };
  const mockDeliveries = [{
    ...mockDelivery,
    totalCount: 10,
  },{
    ...mockDelivery,
    totalCount: 20
  }];

  it('should filter by min count', () => {
    const mockMinCount = 20;

    const expected = mockDeliveries.filter(item => item.totalCount == mockMinCount);
    const result = DeliveryCore.filterByMinCount(mockDeliveries, mockMinCount);

    expect(result).toStrictEqual(expected);
  });

  it('should filter by max count', () => {
    const mockMaxCount = 10;

    const expected = mockDeliveries.filter(item => item.totalCount == mockMaxCount);
    const result = DeliveryCore.filterByMaxCount(mockDeliveries, mockMaxCount);

    expect(result).toStrictEqual(expected);
  });

  it('should sum the count list', () => {
    const totalCount = 3;
    const expected = [{
      totalCount,
    }];
    const mockDeliveries = [mockDelivery];
    const result = DeliveryCore.buildTotalCount(mockDeliveries);

    expect(result).toStrictEqual(expected);
  });

  it('should build the response', () => {
    const totalCount = 1;
    const key = 'key';
    const createdAt = new Date();
    const randomKey = Math.random();

    const deliveries = [{
      totalCount,
      key,
      createdAt,
      randomKey,
    }];
    const expected = [{
      totalCount,
      key,
      createdAt,
    }];

    const result = DeliveryCore.buildResponse(deliveries);

    expect(result).toStrictEqual(expected);
  });
});
