import DeliveryCore from '../Delivery';
import { DeliveryValidator } from '../../validators';
import { DeliveryCollection } from '../../database';

jest.mock('../../validators/Delivery');
jest.mock('../../database/Delivery');


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

  beforeEach(() => {
    jest.clearAllMocks();
  });

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

  it('should throw an error when call Delivery.getDeliveries', async () => {
    const mockReq = { body: {} };
    expect(async() => DeliveryCore.getDeliveries(mockReq)).rejects.toThrow();
  });

  it.only('should pass by all internal methods and call buildResponse', async () => {
    const startDate = 1;
    const endDate = 1;
    const minCount = 1;
    const maxCount = 1;
    const mockReq = {
      minCount,
      maxCount,
      startDate,
      endDate,
    };
    const value = {
      minCount,
      maxCount,
      startDate,
      endDate,
    }

    const deliveries = [mockDelivery];

    DeliveryValidator.post.mockReturnValueOnce({ error: null, value });
    DeliveryCollection.getByStartDate.mockReturnValueOnce(deliveries);
    DeliveryCore.buildTotalCount = jest.fn();
    DeliveryCore.filterByMinCount = jest.fn();
    DeliveryCore.filterByMaxCount = jest.fn();
    DeliveryCore.buildResponse = jest.fn();

    await DeliveryCore.getDeliveries(mockReq);

    expect(DeliveryCore.buildTotalCount).toBeCalled();
    expect(DeliveryCore.filterByMinCount).toBeCalled();
    expect(DeliveryCore.filterByMaxCount).toBeCalled();
    expect(DeliveryCore.buildResponse).toBeCalled();
  });
});
