import type { Schema, Struct } from '@strapi/strapi';

export interface HomeBannerHome extends Struct.ComponentSchema {
  collectionName: 'components_home_banner_homes';
  info: {
    displayName: 'banner_home';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slider_enable: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subtitle: Schema.Attribute.String;
    text_decorated: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LabelsLabels extends Struct.ComponentSchema {
  collectionName: 'components_labels_labels';
  info: {
    displayName: 'labels';
  };
  attributes: {
    lbl_add_cart: Schema.Attribute.String;
    lbl_shop_now: Schema.Attribute.String;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    label: Schema.Attribute.String;
    sitemap: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.banner-home': HomeBannerHome;
      'labels.labels': LabelsLabels;
      'menu.menu': MenuMenu;
    }
  }
}
