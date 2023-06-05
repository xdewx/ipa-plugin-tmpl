/*
 * @Author: leoking
 * @Date: 2023-05-23 14:46:50
 * @LastEditTime: 2023-06-05 16:09:38
 * @LastEditors: leoking
 * @Description: 
 */

declare type PluginItem = {
    id: string
    name: string
    author: string
    version?: string
    description: string
    icon: string
    tags: string[],
    search_scopes?: unknown[],
    actions?: unknown[],
}


declare type SearchItem = PluginItem & {
    item_type: number
}

declare type SearchRequest = {
    keyword: string
    plugin?: SearchItem | PluginItem
    types: string[]
}

declare type SearchEvent = {
    event: 'search'
    data: SearchRequest
}