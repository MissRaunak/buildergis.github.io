import { IMSqlExpression, SqlResult, SqlExpression } from '../../types/sql-expression';
import { IntlShape } from 'react-intl';
import { DataSource } from '../../data-sources/data-source-interface';
/**
 * Get ArcGIS SQL and a user-friendly displaySQL from a SQL Expression.
 * `sql` could be used to query on a ArcGIS service.
 * `displaySQL` could be used for UI.
 * intl is just used for UT.
 */
export declare function getArcGISSQL(sqlExprObj: IMSqlExpression, dataSource: DataSource, intl?: IntlShape): SqlResult;
/**
 * @ignore
 */
export declare function parserSQL(sql: string): SqlExpression;
export declare function containsNonLatinCharacter(string: any): boolean;
/**
 * @ignore
 * Get Local time offset from UTC.
 */
export declare function getTimeOffset(): number;
