import React from 'react';
import { shallow } from 'enzyme';
import { DataSourcesListPage, Props } from './DataSourcesListPage';
import { NavModel } from 'app/types';
import { DataSourceSettings } from '@grafana/ui/src/types';
import { LayoutModes } from '../../core/components/LayoutSelector/LayoutSelector';
import { getMockDataSources } from './__mocks__/dataSourcesMocks';

const setup = (propOverrides?: object) => {
  const props: Props = {
    dataSources: [] as DataSourceSettings[],
    layoutMode: LayoutModes.Grid,
    loadDataSources: jest.fn(),
    navModel: {
      main: {
        text: 'Configuration'
      },
      node: {
        text: 'Data Sources'
      }
    } as NavModel,
    dataSourcesCount: 0,
    searchQuery: '',
    setDataSourcesSearchQuery: jest.fn(),
    setDataSourcesLayoutMode: jest.fn(),
    hasFetched: false,
  };

  Object.assign(props, propOverrides);

  return shallow(<DataSourcesListPage {...props} />);
};

describe('Render', () => {
  it('should render component', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should render action bar and datasources', () => {
    const wrapper = setup({
      dataSources: getMockDataSources(5),
      dataSourcesCount: 5,
      hasFetched: true,
    });

    expect(wrapper).toMatchSnapshot();
  });
});
