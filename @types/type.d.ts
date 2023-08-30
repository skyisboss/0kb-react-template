/**
 *  可选className
 * @interface WithClassName
 */
interface WithClassName {
  className?: string
}
/**
 *  通用可空对象类型
 * @interface ObjectType
 */
interface ObjectType {
  [key: string]: any
}

/**
 * 分页
 */
interface UsePaginationParams {
  current: number
  pageSize: number
}