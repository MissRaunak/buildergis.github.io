import { IMAppConfig, IMAttributesJson, IMCustomThemeJson, IMDataSourceJson, IMDialogJson, IMFooterJson, IMHeaderJson, IMLayoutJson, IMMessageJson, IMPageJson, IMViewJson, IMSectionJson, IMWidgetJson, LayoutInfo, LayoutType, IMSizeModeLayoutJson, IMLayoutItemJson, BrowserSizeMode, Size, DataSourceJson, WidgetJson, BoundingBox, IMProxyJson, IMScreenGroupJson, IMScreenJson, UseDataSource, IMUseDataSource, IMUtilitiesJson, UtilityJson } from 'jimu-core';
export declare function getAppConfigAction(appConfig?: IMAppConfig): AppConfigAction;
export declare class AppConfigAction {
    appConfig: IMAppConfig;
    /**
   * When duplicate a page or dialog, we'll duplicate all size mode layouts, but the shared contents should be duplicated only one time.
   * So, when duplicate the size mode layouts, we need to consider the contents that have been duplicated. If a content has been duplicated,
   * duplicate the same content will need to use the duplicated content id instead of create a new one.
   *
   * When start to duplicate a page or dialog, must clean this map and set it as `{}`, and restore to {} when duplication is done.
   */
    private duplicatedContentMaps?;
    private isDuplicatingPage?;
    constructor(appConfig: IMAppConfig);
    /**
     *
     * @param replace by default, the change is appended to the change list. If replace = true, the change will replace the last change
     */
    exec(replace?: boolean): this;
    /**
     * After delete the widget, clear the message action of the widget
     * @oldAppConfig
     * @newAppConfig
     * */
    private readonly clearDeletedWidgetMessageAction;
    /**
     * Get the message config of the deleted widget
     * @oldAppConfig
     * @newAppConfig
     * */
    private readonly getDeletedWidgetsMessageConfigs;
    /**
     * Remove message action
     * @message
     * */
    private readonly removeMessageAction;
    editWidgetConfig(widgetId: string, widgetConfig: any): this;
    /**
     * Update the passed in properties only.
     * To delete a property, please set the property to null
     * @param partialWidgetJson
     * @param outputDataSourcesJsons
     *    To create a data source, you need to pass in all of the generated properties.
     *    To update a data source, you can pass in the change properties only. Pass null to delete a property.
     */
    editWidget(partialWidgetJson: Partial<WidgetJson>, outputDataSourcesJsons?: DataSourceJson[]): this;
    /**
     * Update a sigle widget property. Does not `outputDataSources` property
     * @param widgetId
     * @param prop
     * @param val
     */
    editWidgetProperty(widgetId: string, prop: string, val: any): this;
    /**
     *
     * @param widgetJson id is required
     * @param createEmbedLayout
     */
    createWidget(widgetJson: IMWidgetJson, createEmbedLayout?: boolean): IMWidgetJson;
    /**
     * Remove the widget and its related configs
     * @param widgetId
     */
    removeWidget(widgetId: string): this;
    /**
     * Duplicate the widget and return the new widget. The new widget is not put in the layout
     * @param widgetId
     */
    duplicateWidget(widgetId: string): IMWidgetJson;
    /**
     * create section only, does not add into layout
     */
    createSection(): IMSectionJson;
    removeSection(sectionId: string): this;
    /**
     * Can change the section view order, but can't add/remove the view
     * @param sectionJson
     */
    editSection(sectionJson: IMSectionJson): this;
    editSectionProperty(sectionId: string, prop: string, val: any): this;
    editScreenGroupProperty(screenGroupId: string, prop: string, val: any): this;
    /**
     * Duplicate the section and return the new section. The new section is not put in the layout
     * @param sectionId
     */
    duplicateSection(sectionId: string): IMSectionJson;
    editView(viewJson: IMViewJson): this;
    /**
     * Add a view into a section, will create layouts for the view. The layouts are created depends on the section.
     *
     * @param viewJson the viewJson has id and label only
     * @param sectionId the section that the view will be added in
     */
    addView(viewJson: IMViewJson, sectionId: string): this;
    /**
     * Duplicate the view in the section, return the new view.
     * @param viewId
     * @param sectionId
     * @param addToSection
     */
    duplicateView(viewId: string, sectionId: string, addToSection: boolean): IMViewJson;
    /**
     * Remove the view from the section. The last view in the section is not allowed remove
     * @param viewId
     * @param sectionId
     */
    removeView(viewId: string, sectionId: string): this;
    /**
     * Move the view position in the section. Move the view to the targetView's above/below
     * @param sectionId
     * @param viewId
     * @param targetViewId
     * @param position
     */
    moveViewInSection(sectionId: string, viewId: string, targetViewId: string, position: 'above' | 'below'): this;
    /**
     * Create an empty screen group
     */
    createScreenGroup(): IMScreenGroupJson;
    editScreen(screenJson: IMScreenJson): this;
    moveScreenInGroup(screenGroupId: string, index: number, targetIndex: number, position: 'above' | 'below'): this;
    removeScreenByIndex(index: number, screenGroupId: string): this;
    removeScreenGroup(screenGroupId: string): this;
    /**
     * Remove the screen from the screen group. The last screen in the screen group is not allowed remove
     * @param screenId
     * @param screenGroupId
     */
    removeScreen(screenId: string, screenGroupId: string, force?: boolean): this;
    duplicateScreenByIndex(index: number, screenGroupId: string, addToScreenGroup?: boolean): IMScreenJson;
    /**
     * Duplicate the screen in the screen group, return the new screen.
     * @param screenId
     * @param screenGroupId
     * @param addToScreenGroup
     */
    duplicateScreen(screenId: string, screenGroupId: string, addToScreenGroup?: boolean): IMScreenJson;
    /**
     * Duplicate the screenGroup and return the new screenGroup. The new screenGroup is not put in the layout
     * @param screenGroupId
     */
    duplicateScreenGroup(screenGroupId: string): IMScreenGroupJson;
    /**
     * Edit the page json only, does not update content in the page
     * @param pageJson
     */
    editPage(pageJson: IMPageJson): this;
    editPageProperty(pageId: string, prop: string, val: any): this;
    /**
     *
     * @param pageJson
     *
     * Add a new page. Only the folder and link page is created here.
     * The other page (the page can put widgets) are created in `template-utils in jimu-for-builder`
     */
    addPage(pageJson: IMPageJson): this;
    /**
     *
     * @param pageId
     * @param duplicatePageJsonOnly
     * if duplicatePageJsonOnly is true, the page won't be put into page structure.
     * It's used when one page(or folder, or link) need to duplicate its sub pages.
     *
     * This logic need to be refacted when page structure has more than two levels.
     */
    duplicatePage(pageId: string, duplicatePageJsonOnly?: boolean): IMPageJson;
    movePageIntoPage(subPageId: string, parentPageId: string): this;
    orderPageToPage(pageId: string, targetPageId: string, type: 'top' | 'bottom'): this;
    removePage(pageId: string, newHomePageId?: string): this;
    setHomePage(pageId: string): this;
    setUseAutoSortInFixedLayout(value: boolean): this;
    replaceHomePage(pageId: string): this;
    editDialog(dialogJson: IMDialogJson): this;
    editDialogProperty(dlgId: string, prop: string, val: any): this;
    removeDialog(dialogId: string): this;
    duplicateDialog(dialogId: string): IMDialogJson;
    /**
     * Only support reordering dialogs for same mode.
     */
    orderDialogToDialog(dialogId: string, targetDialogId: string, type: 'top' | 'bottom'): this;
    replaceSplashDialog(dialogId: string, splashDialogId?: string): this;
    createLayoutForSizeModeForHeader(sizeMode: BrowserSizeMode, fromSizeMode: BrowserSizeMode): this;
    removeSizeModeLayoutFromHeader(sizeMode: BrowserSizeMode): this;
    createLayoutForSizeModeForFooter(sizeMode: BrowserSizeMode, fromSizeMode: BrowserSizeMode): this;
    removeSizeModeLayoutFromFooter(sizeMode: BrowserSizeMode): this;
    copyLayoutContent(fromLayoutId: string, toLayoutId: string): this;
    createLayoutForSizeModeForPageBody(sizeMode: BrowserSizeMode, fromSizeMode: BrowserSizeMode, pageId: string): this;
    removeSizeModeLayoutFromPageBody(pageId: string, sizeMode: BrowserSizeMode): this;
    createLayoutForSizeModeForDialog(sizeMode: BrowserSizeMode, fromSizeMode: BrowserSizeMode, dialogId: string): this;
    removeSizeModeLayoutFromDialog(dialogId: string, sizeMode: BrowserSizeMode): this;
    createLayoutForSizeModeForOneLayout(sizeMode: BrowserSizeMode, fromSizeMode: BrowserSizeMode, layout: IMSizeModeLayoutJson): IMLayoutJson;
    /**
     * Remove the layout and all the embedde layout for the size mode
     * If a widget is only used in current size mode, it should be removed
     * @param layoutId
     * @param sizeMode
     */
    removeSizeModeLayout(layoutId: string, sizeMode: BrowserSizeMode): this;
    /**
     * return the created layout id.
     */
    createEmptyLayoutForWidgetOnCurrentSizeMode(widgetId: string, layoutName: string, layoutLabel: string, layoutType?: LayoutType): string;
    removeLayoutFromWidget(widgetId: string, layoutName: string): this;
    /**
     * Add the item into layout, return the new layout info.
     * If the item (widget/section) has embed layout, and the layout does not exist in the current sizeMode, we'll create a new one for them.
     * @param layoutId the layout will add into
     * @param item the to be add item. the item has not been in a layout
     * @param insertIndex
     * @param fromSizeMode valid for adding pending item only, means which sizeMode the pending item comes from
     */
    addItemIntoLayout(layoutId: string, item: IMLayoutItemJson, insertIndex: number, fromSizeMode?: BrowserSizeMode): LayoutInfo;
    /**
     * no need to deal with screen group here, since there is no way to move a screen group to another layout
     * @param fromLayoutInfo
     * @param toLayoutInfo
     * @param itemBBox
     * @param insertIndex
     */
    moveLayoutItemToAnotherLayout(fromLayoutInfo: LayoutInfo, toLayoutInfo: LayoutInfo, itemBBox: BoundingBox, insertIndex: number): LayoutInfo;
    setLayoutItemToPending(layoutInfo: LayoutInfo, value: boolean): this;
    /**
     * Duplicate the layout item and return the new layout item info
     * @param originLayoutId
     * @param desLayoutId
     * @param itemId
     * @param duplicateContent
     *    If true, will duplicate the content(widget/section)
     *    If false, the two items will refer to the same content
     * @param keepOrder
     *    If true, will try to keep same order to origin layout item;
     *    If false, will append to the duplicated item.
     */
    duplicateLayoutItem(originLayoutId: string, desLayoutId: string, itemId: string, duplicateContent: boolean, keepOrder?: boolean, keepItemId?: boolean): LayoutInfo;
    /**
     *
     * @param layoutInfo
     * @param removeContent false, remove layout item only. true, remove the widget/section in the layout item
     */
    removeLayoutItem(layoutInfo: LayoutInfo, removeContent: boolean, isRemovingWholeLayout?: boolean): this;
    private checkWhetherRemoveContent;
    clearRedundantLayout(removedLayoutInfo: LayoutInfo): this;
    removeLayout(layoutId: string, removeContent: boolean): this;
    /**
     * Use sourceLayout's content to replace the target layout, then remove sourceLayout id.
     * This method is used when applying page template to an empty page.
     */
    replaceLayout(targetLayoutId: string, sourceLayoutId: string): this;
    /**
     * reset the layout to an empty layout. Does not remove the content if it's used in other mode
     * @param layoutId
     * @param removeContent
     *
     */
    resetLayout(layoutId: string, removeContent: boolean): this;
    /**
     * Duplicate the layout items from one layout to another layout.
     * @param originLayoutId
     * @param newLayoutId
     * @param duplicateContent
     */
    duplicateLayoutItems(originLayoutId: string, newLayoutId: string, duplicateContent: boolean): this;
    /**
     * Duplicate layout and return new layout json.
     * @param layoutId
     * @param duplicateContent
     */
    duplicateLayout(layoutId: string, duplicateContent: boolean): IMLayoutJson;
    detachGridItem(layout: IMLayoutJson, layoutItemId: string): IMLayoutJson;
    editLayoutSetting(layoutInfo: LayoutInfo, setting: any): this;
    editLayoutType(layoutInfo: LayoutInfo, type: LayoutType): this;
    editLayoutLabel(layoutInfo: LayoutInfo, label: string): this;
    editLayoutItemSetting(layoutInfo: LayoutInfo, setting: any): this;
    editLayoutItemSize(layoutInfo: LayoutInfo, width: number, height: number): this;
    editLayoutItemBBox(layoutInfo: LayoutInfo, bbox: any): this;
    /**
     * This operation only works in fixed layout.
     */
    exchangeWidthAndHeight(): this;
    updateLayoutItem(layoutInfo: LayoutInfo, prop: string, value: any): this;
    editLayoutItemIndex(layoutInfo: LayoutInfo, parentLayoutInfo: LayoutInfo, newIndex: number): this;
    editLayoutOrder(layoutInfo: LayoutInfo, order: string[]): this;
    addLayout(layoutJson: IMLayoutJson): this;
    /**
     * Copy the parent use datasource to children widgets
     * @param parentWidgetId
     */
    copyUseDataSourceToAllChildWidgets(oldParentWidgetJson: IMWidgetJson, newParentWidgetJson: IMWidgetJson): this;
    clearEmptyRowInFlowLayout(removedLayoutInfo: LayoutInfo): this;
    clearMaintainedColumnInRowWidget(removedLayoutInfo: LayoutInfo): this;
    clearGridLayout(removedLayoutInfo: LayoutInfo): this;
    addDataSource(dataSourceJson: IMDataSourceJson): this;
    addDataSources(dataSourceJsons: IMDataSourceJson[]): this;
    addUtility(utility: UtilityJson): this;
    removeUtility(utilityId: string): this;
    updateUtilities(utilities: IMUtilitiesJson): this;
    removeUseMapWidgetId(mapWidgetId: string): IMAppConfig;
    removeDataSource(dataSourceId: string): this;
    isUseDataSourceShouldBeRemoved(useDs: UseDataSource | IMUseDataSource, realToBeRemovedDsId: string): boolean;
    editDataSource(dataSourceJson: IMDataSourceJson): this;
    /**
     * Duplicate the datasourcen and return the new datasource. The new datasource has been added to app config
     * @param dataSourceId
     */
    duplicateDataSource(dataSourceId: string): IMDataSourceJson;
    addAppProxy(proxyJson: IMProxyJson): this;
    editAppProxy(proxyJson: IMProxyJson): this;
    removeAppProxy(appProxyId: string): this;
    addMessage(messageJson: IMMessageJson): this;
    editMessage(messageJson: IMMessageJson): this;
    removeMessage(messageJson: IMMessageJson): this;
    private duplicateWidgetMessageConfig;
    private removeDataActionProvidedByWidget;
    private removeWidgetMessageAndAction;
    editTheme(themeName: string): this;
    editCustomTheme(customTheme: IMCustomThemeJson): this;
    editHeader(headerJson: IMHeaderJson, headerLayoutJsons?: IMLayoutJson[]): this;
    editFooter(footerJson: IMFooterJson, footerLayoutJsons?: IMLayoutJson[]): this;
    setViewportSize(browserSizeMode: BrowserSizeMode, size: Size): this;
    setLockLayout(lockLayout: boolean): this;
    editAttributes(attributesJson: IMAttributesJson): this;
    /**
     * Merge the use data source from fromWidget to toWidget. If toWidget has the same data source/view, we don't override it.
     * @param fromWidgetJson
     * @param toWidgetJson
     */
    private mergeUseDataSource;
    /**
     * When widget is moved between layout, widget MAY be moved into/out from another widget (like list).
     * When the widget is moved into another widget (like list), it needs to inherit the data source info from the containing widget.
     *
     * We will not remove the use data source when widget is moved out of a layout.
     *
     * @param widgetId the widget that is moving
     * @param toLayoutId the layout that the widget is moving to
     *
     */
    private updateWidgetDataSourceBeforeChangingLayout;
    private getDuplicateLabel;
    private compactGridContainer;
    private extractWidgetFromMaintainedColumn;
    private adjustIndexOfLayoutItem;
    /**
     * create an empty layout for the widget, for the size mode
     * @param widgetJson
     * @param sizeMode
     */
    private createLayoutsForWidget;
    private removePageFromPageStructure;
    /**
     * Duplicate the container content, return the new layout that hold the duplicated contents
     * @param containerType
     * @param id
     */
    private doDuplicateContainerContent;
    private doDuplicateEmbedWidgetContent;
    private createEmptyLayoutJson;
    private movePageIntoPageForPageStructure;
    /**
     *
     * @param containerType
     * @param id
     */
    private removeContainerContent;
    private getContainerJson;
    /**
     * Remove views in the section
     * @param sectionId
     */
    private removeSectionContent;
    private updateLayout;
    private transformLayout;
}
