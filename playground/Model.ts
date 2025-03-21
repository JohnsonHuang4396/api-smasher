// @ts-nocheck

export interface WechatAssessmentQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 企微群id
   */
  chat_id?: string
  _chat_id?: string
  /**
   * 企微群名称
   */
  name?: string

  /**
   * crm客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * crm客户名称
   */
  clientName?: string

  /**
   * 亿企赢绑定手机号
   */
  loginName?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工名称
   */
  userName?: number

  /**
   * 开始时间
   */
  startDate?: string

  /**
   * 结束时间
   */
  endDate?: string

}

export interface IPageWechatEmployeeConversationVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: WechatEmployeeConversationVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageWechatEmployeeConversationVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageWechatEmployeeConversationVO

  /**
   * msg
   */
  msg?: string

}

export interface WechatEmployeeConversationVO {
/**
 * 员工姓名
 */
  userName?: string

  /**
   * 所属组织Id
   */
  orgId?: string
  _orgId?: string
  /**
   * 联系客户数
   */
  contactClientNum?: number

  /**
   * 活跃客户数
   */
  activeClientNum?: number

  /**
   * 沉默客户数
   */
  inactiveClientNum?: number

  /**
   * 咨询会话数
   */
  clientContactNum?: number

  /**
   * 回复会话数
   */
  replyClientNum?: number

  /**
   * 未回复会话数
   */
  noReplyClientNum?: number

  /**
   * 咨询回复率
   */
  replyRatio?: string

  /**
   * 平均会话时长
   */
  avgDuration?: string

  /**
   * 发送消息总数
   */
  contactClientMsgNum?: number

  /**
   * 主动发送消息数
   */
  proactiveMsgNum?: number

  /**
   * 与客户沟通确认申报税款通知次数
   */
  taxConfirmNum?: number

}

export interface IPageWechatClientConversationVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: WechatClientConversationVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageWechatClientConversationVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageWechatClientConversationVO

  /**
   * msg
   */
  msg?: string

}

export interface WechatClientConversationVO {
/**
 * 企业名称
 */
  clientName?: string

  /**
   * 所属组织Id
   */
  orgId?: string
  _orgId?: string
  /**
   * 员工发送消息数
   */
  employeeMsgNum?: number

  /**
   * 客户发送消息数
   */
  clientMsgNum?: number

  /**
   * 咨询会话数
   */
  clientContactNum?: number

  /**
   * 回复会话数
   */
  replyClientNum?: number

  /**
   * 未回复会话数
   */
  noReplyClientNum?: number

  /**
   * 咨询回复率
   */
  replyRatio?: string

  /**
   * 平均会话时长
   */
  avgDuration?: string

  /**
   * 关联企微群名称
   */
  weChatGroupName?: string

  /**
   * 是否及时建群
   */
  isPromptlySetUp?: string

  /**
   * 与客户沟通确认申报税款通知次数
   */
  taxConfirmNum?: number

}

export interface TestUser {
/**
 * id
 */
  id?: string
  _id?: string
  /**
   * name
   */
  name?: string

  /**
   * age
   */
  age?: number

  /**
   * height
   */
  height?: number

}

export interface R {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: Record<string, any>

  /**
   * msg
   */
  msg?: string

}

export interface SalesBusinessQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 销售员id
   */
  salesmanIds?: number[]

  /**
   * 销售（业务）组织
   */
  saleOrgIds?: number[]

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 业务类别id
   */
  categoryIds?: number[]

  /**
   * 服务项目id
   */
  itemIds?: number[]

  /**
   * 签订开始日期
   */
  signBeginDate?: string

  /**
   * 签订结束日期
   */
  signEndDate?: string

  /**
   * 上期签订开始日期
   */
  lastSignBeginDate?: string

  /**
   * 上期签订结束日期
   */
  lastSignEndDate?: string

  /**
   * 协议金额开始
   */
  contractAmountBegin?: number

  /**
   * 协议金额结束
   */
  contractAmountEnd?: number

  /**
   * 合同状态
   */
  contractStatus?: string[]

  /**
   * 销售部门id
   */
  saleDeptIds?: number[]

  /**
   * 新增与流失查询标识
   */
  newLostQuery?: boolean

  /**
   * 导出请求类型(1:员工,2:组织)
   */
  exportType?: number

  /**
   * 新增流失查询类型(0:上期合同明细,1:本期合同明细,2:续签合同明细,3:新签合同明细,4:流失合同明细
   */
  newLostQueryType?: string

}

export interface IPageSalesmanBusinessDetailVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: SalesmanBusinessDetailVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageSalesmanBusinessDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageSalesmanBusinessDetailVO

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessDetailVO {
/**
 * 客户id
 */
  clientId?: string
  _clientId?: string
  /**
   * 客户名称
   */
  clientName?: string

  /**
   * 销售员id
   */
  saleUserId?: string
  _saleUserId?: string
  /**
   * 销售员名称
   */
  saleUserName?: string

  /**
   * 协议编号
   */
  contractCode?: string

  /**
   * 销售（业务）组织
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

  /**
   * 销售部门id
   */
  saleDeptId?: string
  _saleDeptId?: string
  /**
   * 销售部门名称
   */
  saleDeptName?: string

  /**
   * 业务类别id
   */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别名称
   */
  categoryName?: string

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目名称
   */
  itemName?: string

  /**
   * 签订日期
   */
  signDate?: string

  /**
   * 服务开始日期
   */
  serviceBeginDate?: string

  /**
   * 服务结束日期
   */
  serviceEndDate?: string

  /**
   * 协议金额
   */
  contractAmount?: number

  /**
   * 实收金额
   */
  actualReceiveAmount?: number

  /**
   * 签订类型
   */
  signType?: string

}

export interface IPageSalesmanBusinessRankVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: SalesmanBusinessRankVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageSalesmanBusinessRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageSalesmanBusinessRankVO

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessRankVO {
/**
 * 销售员ID
 */
  saleUserId?: string
  _saleUserId?: string
  /**
   * 销售员名称
   */
  saleUserName?: string

  /**
   * 协议份数
   */
  totalContractNum?: number

  /**
   * 协议总额
   */
  totalAmount?: number

  /**
   * 实收总额
   */
  totalActualAmount?: number

  /**
   * 集团内排名
   */
  groupRank?: number

  /**
   * 组织内排名
   */
  orgRank?: number

  /**
   * 部门内排名
   */
  deptRank?: number

}

export interface RListSalesmanBusinessOrgRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesmanBusinessOrgRankVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessOrgRankVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织
   */
  saleOrgName?: string

  /**
   * 协议份数
   */
  totalContractNum?: number

  /**
   * 协议总额
   */
  totalAmount?: number

  /**
   * 实收总额
   */
  totalActualAmount?: number

}

export interface RListSalesmanBusinessDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesmanBusinessDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RListSalesNewLostDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesNewLostDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesNewLostDetailVO {
/**
 * 业务类别ID
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别
   */
  categoryName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目
   */
  serviceItemName?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 上期协议数
   */
  lastContractNum?: number

  /**
   * 本期协议数
   */
  currentContractNum?: number

  /**
   * 新增协议数
   */
  newContractNum?: number

  /**
   * 续签协议数
   */
  renewContractNum?: number

  /**
   * 流失协议数
   */
  churnContractNum?: number

}

export interface RListSalesServiceGrowthDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesServiceGrowthDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesServiceGrowthDetailVO {
/**
 * 业务类别ID
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别
   */
  categoryName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目
   */
  serviceItemName?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 上期协议数
   */
  lastContractNum?: number

  /**
   * 上期业务总额
   */
  lastContractAmount?: number

  /**
   * 本期协议数
   */
  currentContractNum?: number

  /**
   * 本期业务总额
   */
  currentContractAmount?: number

  /**
   * 协议增长数
   */
  contractNumGrowth?: number

  /**
   * 协议增长金额
   */
  contractAmountGrowth?: number

  /**
   * 协议数增长率
   */
  contractNumGrowthRate?: string

  /**
   * 协议金额增长率
   */
  contractAmountGrowthRate?: string

  /**
   * 业务占比
   */
  serviceProportion?: string

  /**
   * 组织业务增长排名
   */
  orgGrowthRank?: string

}

export interface BookKeepingStatisticsQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 销售员id
   */
  salesmanIds?: number[]

  /**
   * 销售（业务）组织
   */
  saleOrgIds?: number[]

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 业务类别id
   */
  categoryIds?: number[]

  /**
   * 服务项目id
   */
  itemIds?: number[]

  /**
   * 签订开始日期
   */
  signBeginDate?: string

  /**
   * 签订结束日期
   */
  signEndDate?: string

  /**
   * 上期签订开始日期
   */
  lastSignBeginDate?: string

  /**
   * 上期签订结束日期
   */
  lastSignEndDate?: string

  /**
   * 协议金额开始
   */
  contractAmountBegin?: number

  /**
   * 协议金额结束
   */
  contractAmountEnd?: number

  /**
   * 合同状态
   */
  contractStatus?: string[]

  /**
   * 企业类型
   */
  enterpriseType?: string

  /**
   * 企业规模
   */
  enterpriseSize?: string

  /**
   * 企业所得税征收方式
   */
  enterpriseTaxType?: string

  /**
   * 行业类别
   */
  industryType?: string

  /**
   * 企业特征
   */
  enterpriseCharacter?: string

  /**
   * 客户类别
   */
  clientType?: string

  /**
   * 上期年度
   */
  lastYear?: string

  /**
   * 本期年度
   */
  currentYear?: string

}

export interface BookKeepingLostVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 年度服务客户数
   */
  totalContractNum?: number

  /**
   * 小规模以上流失户数（非正常流失）
   */
  abnormalScaledLostContractNum?: number

  /**
   * 小规模以上流失率（非正常流失）
   */
  abnormalScaledLostRate?: string

  /**
   * 个体户流失户数（非正常流失）
   */
  abnormalIndividualLostContractNum?: number

  /**
   * 个体户流失率（非正常流失）
   */
  abnormalIndividualLostRate?: string

  /**
   * 总流失户数（非正常流失）
   */
  abnormalTotalLostContractNum?: number

  /**
   * 总流失率（非正常流失）
   */
  abnormalTotalLostRate?: string

  /**
   * 小规模以上流失户数（总流失）
   */
  totalScaledLostContractNum?: number

  /**
   * 小规模以上流失率（总流失）
   */
  totalScaledLostRate?: string

  /**
   * 个体户流失户数（总流失）
   */
  totalIndividualOwnerLostContractNum?: number

  /**
   * 个体户流失率（总流失）
   */
  totalIndividualOwnerLostRate?: string

  /**
   * 总流失户数
   */
  totalLostContractNum?: number

  /**
   * 总流失率（非正常流失）
   */
  totalLostRate?: string

}

export interface RListBookKeepingLostVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingLostVO[]

  /**
   * msg
   */
  msg?: string

}

export interface BookKeepingGrowthVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 上期户数（小规模以上）
   */
  scaledLastContractNum?: number

  /**
   * 本期户数（小规模以上）
   */
  scaledCurrentContractNum?: number

  /**
   * 增长户数（小规模以上）
   */
  scaledContractNumGrowth?: number

  /**
   * 增长比率（小规模以上）
   */
  scaledGrowthRate?: string

  /**
   * 上期户数（个体户）
   */
  individualOwnerLastContractNum?: number

  /**
   * 本期户数（个体户）
   */
  individualOwnerCurrentContractNum?: number

  /**
   * 增长户数（个体户）
   */
  individualOwnerContractNumGrowth?: number

  /**
   * 增长比率（个体户）
   */
  individualOwnerGrowthRate?: string

  /**
   * 上期总户数
   */
  totalLastContractNum?: number

  /**
   * 本期总户数
   */
  totalCurrentContractNum?: number

  /**
   * 总增长户数
   */
  totalContractNumGrowth?: number

  /**
   * 总增长比率
   */
  totalGrowthRate?: string

}

export interface RListBookKeepingGrowthVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingGrowthVO[]

  /**
   * msg
   */
  msg?: string

}

export interface BookKeepingClientCompositionVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 户数
   */
  totalContractNum?: number

  /**
   * 比例
   */
  proportion?: string

  /**
   * 协议总金额
   */
  totalContractAmount?: number

  /**
   * 应收总金额
   */
  totalReceivableAmount?: number

}

export interface RListBookKeepingClientCompositionVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingClientCompositionVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataQO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
}

export interface RBoolean {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: boolean

  /**
   * msg
   */
  msg?: string

}

export interface MobileBranchSalesDetailVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 业务签约总额
   */
  contractAmount?: number

  /**
   * 协议签约金额
   */
  contractTypeAmount?: number

  /**
   * 销售目标
   */
  salesTargetAmount?: number

  /**
   * 销售目标完成率
   */
  targetCompletionRate?: number

}

export interface MobileBranchSalesRankVO {
/**
 * 销售前五列表
 */
  topList?: MobileBranchSalesDetailVO[]

  /**
   * 销售后五列表
   */
  lastList?: MobileBranchSalesDetailVO[]

}

export interface RMobileBranchSalesRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileBranchSalesRankVO

  /**
   * msg
   */
  msg?: string

}

export interface MobileSalesSummaryVO {
/**
 * 销售（业务）组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

  /**
   * 财税类当年签约数
   */
  taxServiceYearlyTotalContract?: number

  /**
   * 财税类当年签约总额
   */
  taxServiceYearlyTotalAmount?: number

  /**
   * 财税类当月签约数
   */
  taxServiceMonthlyTotalContract?: number

  /**
   * 财税类当月签约总额
   */
  taxServiceMonthlyTotalAmount?: number

  /**
   * 非财税类当年签约数
   */
  nonTaxServiceYearlyTotalContract?: number

  /**
   * 非财税类当年签约总额
   */
  nonTaxServiceYearlyTotalAmount?: number

  /**
   * 非财税类当月签约数
   */
  nonTaxServiceMonthlyTotalContract?: number

  /**
   * 非财税类当月签约总额
   */
  nonTaxServiceMonthlyTotalAmount?: number

  /**
   * 当年签约数
   */
  yearlyTotalContract?: number

  /**
   * 当年签约总额
   */
  yearlyTotalAmount?: number

  /**
   * 当月签约数
   */
  monthlyTotalContract?: number

  /**
   * 当月签约总额
   */
  monthlyTotalAmount?: number

  /**
   * 当年营收总额
   */
  yearlyTotalIncome?: number

  /**
   * 财税类占比
   */
  taxContractRatio?: number

  /**
   * 非财税类占比
   */
  nonTaxServiceRatio?: number

}

export interface RMobileSalesSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileSalesSummaryVO

  /**
   * msg
   */
  msg?: string

}

export interface RReportBusinessAnalysisVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessAnalysisVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessAnalysisVO {
/**
 * 组织id
 */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 本月新增商机
   */
  monthNewNum?: number

  /**
   * 本月商机金额
   */
  monthNewAmount?: number

  /**
   * 本月赢单商机
   */
  monthDealNum?: number

  /**
   * 本月赢单金额
   */
  monthDealAmount?: number

  /**
   * 本年新增商机
   */
  yearNewNum?: number

  /**
   * 本年商机金额
   */
  yearNewAmount?: number

  /**
   * 本年赢单商机
   */
  yearDealNum?: number

  /**
   * 本年赢单金额
   */
  yearDealAmount?: number

  /**
   * 本年输单商机
   */
  yearLoseNum?: number

  /**
   * 本年输单金额
   */
  yearLoseAmount?: number

  /**
   * 跟进中的商机
   */
  followingNum?: number

  /**
   * 赢单率(年)
   */
  dealRate?: number

  /**
   * 输单率(年)
   */
  loseRate?: number

}

export interface MobileStatisticsQO {
/**
 * 组织id
 */
  orgIds?: number[]

  /**
   * 开始时间
   */
  startDate?: string

  /**
   * 结束时间
   */
  endDate?: string

  /**
   * 排名
   */
  sort?: string

}

export interface ClientSummaryVO {
/**
 * 客户数
 */
  clientCount?: number

  /**
   * 金额
   */
  actualReceiveAmount?: number

  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

}

export interface MobileClientStatisticsVO {
/**
 * 新增客户数
 */
  newClientCount?: number

  /**
   * 成交客户数
   */
  closedClientCount?: number

  /**
   * 成交总额
   */
  totalSales?: number

  /**
   * 客户统计列表
   */
  closedClientRank?: ClientSummaryVO[]

}

export interface RMobileClientStatisticsVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileClientStatisticsVO

  /**
   * msg
   */
  msg?: string

}

export interface DepositMenberQO {
/**
 * 销售组织IDs
 */
  salesOrgIds?: number[]

  /**
   * 销售员IDs
   */
  salesmanIds?: number[]

  /**
   * 预存年数
   */
  depositYears?: number

}

export interface OrgDepositObjVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 人均户数指标
   */
  depositNumObj?: number

  /**
   * 人均业绩指标
   */
  depositAmountObj?: number

}

export interface RListOrgDepositObjVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgDepositObjVO[]

  /**
   * msg
   */
  msg?: string

}

export interface OrgDepositRankVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 预存总户数
   */
  totalNum?: number

  /**
   * 预存总金额
   */
  totalAmount?: number

  /**
   * 一年预存总户数
   */
  oneYearDepositNum?: number

  /**
   * 一年预存总金额
   */
  oneYearDepositAmount?: number

  /**
   * 一年预存提成总额（未考核）
   */
  oneYearTotalBonus?: number

  /**
   * 一年预存实际应发提成
   */
  oneYearActualBonus?: number

  /**
   * 两年预存总户数
   */
  twoYearDepositNum?: number

  /**
   * 两年预存总金额
   */
  twoYearDepositAmount?: number

  /**
   * 两年预存提成总额（未考核）
   */
  twoYearTotalBonus?: number

  /**
   * 两年预存实际应发提成
   */
  twoYearActualBonus?: number

  /**
   * 三年预存总户数
   */
  threeYearDepositNum?: number

  /**
   * 三年预存总金额
   */
  threeYearDepositAmount?: number

  /**
   * 三年预存提成总额（未考核）
   */
  threeYearTotalBonus?: number

  /**
   * 三年预存实际应发提成
   */
  threeYearActualBonus?: number

  /**
   * 提成总额（未考核）
   */
  totalBonus?: number

  /**
   * 占预存比例（未考核）
   */
  bonusProportion?: string

  /**
   * 实际应发提成总额
   */
  totalActualBonus?: number

  /**
   * 人均户数目标
   */
  depositNumObj?: number

  /**
   * 人均业绩目标
   */
  depositAmountObj?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

}

export interface RListOrgDepositRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgDepositRankVO[]

  /**
   * msg
   */
  msg?: string

}

export interface EmployeeDepositDetailVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 销售员ID
   */
  salesmanId?: string
  _salesmanId?: string
  /**
   * 销售员名称
   */
  salesmanName?: string

  /**
   * 预存总户数
   */
  totalNum?: number

  /**
   * 预存总金额
   */
  totalAmount?: number

  /**
   * 一年预存总户数
   */
  oneYearDepositNum?: number

  /**
   * 一年预存总金额
   */
  oneYearDepositAmount?: number

  /**
   * 一年预存提成总额（未考核）
   */
  oneYearTotalBonus?: number

  /**
   * 一年预存实际应发提成
   */
  oneYearActualBonus?: number

  /**
   * 两年预存总户数
   */
  twoYearDepositNum?: number

  /**
   * 两年预存总金额
   */
  twoYearDepositAmount?: number

  /**
   * 两年预存提成总额（未考核）
   */
  twoYearTotalBonus?: number

  /**
   * 两年预存实际应发提成
   */
  twoYearActualBonus?: number

  /**
   * 三年预存总户数
   */
  threeYearDepositNum?: number

  /**
   * 三年预存总金额
   */
  threeYearDepositAmount?: number

  /**
   * 三年预存提成总额（未考核）
   */
  threeYearTotalBonus?: number

  /**
   * 三年预存实际应发提成
   */
  threeYearActualBonus?: number

  /**
   * 提成总额（未考核）
   */
  totalBonus?: number

  /**
   * 实际应发提成总额
   */
  totalActualBonus?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

  /**
   * 目标户数系数
   */
  numObjCoef?: number

  /**
   * 目标业绩系数
   */
  amountObjCoef?: number

  /**
   * 总系数
   */
  finalCoef?: number

}

export interface OrgGroupingEmployeeDetailVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 组织人员明细列表
   */
  employeeDepositDetailList?: EmployeeDepositDetailVO[]

  /**
   * 人均户数指标
   */
  depositNumObj?: number

  /**
   * 人均业绩指标
   */
  depositAmountObj?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

}

export interface RListOrgGroupingEmployeeDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgGroupingEmployeeDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesSummaryQO {
/**
 * 服务开始日期
 */
  serviceBeginDate?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

  /**
   * 服务结束日期
   */
  serviceEndDate?: string

}

export interface RListSalesSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesSummaryVO {
/**
 * 实际应收金额
 */
  actualReceiveAmount?: number

  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

}

export interface ProductSaleSummaryQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

  /**
   * 服务项目id列表
   */
  itemIdList?: number[]

}

export interface ProductSaleSummaryVO {
/**
 * 合同数
 */
  contractCount?: number

  /**
   * 合同总额
   */
  totalAmount?: number

  /**
   * 服务项目
   */
  itemName?: string

}

export interface RListProductSaleSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ProductSaleSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ClientValueQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

}

export interface ClientValueAmountVO {
/**
 * 实际应收金额
 */
  actualReceiveAmount?: number

  /**
   * 客户名称
   */
  clientName?: string

}

export interface ClientValueItemCountVO {
/**
 * 服务数
 */
  itemCount?: number

  /**
   * 客户名称
   */
  clientName?: string

}

export interface ClientValueVO {
/**
 * 业务前30客户
 */
  itemList?: ClientValueItemCountVO[]

  /**
   * 金额前30客户
   */
  amountList?: ClientValueAmountVO[]

}

export interface RClientValueVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ClientValueVO

  /**
   * msg
   */
  msg?: string

}

export interface ClientSummaryQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

}

export interface RListClientSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ClientSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientProfileQO {
/**
 * 客户创建时间-开始
 */
  createTimeStart?: string

  /**
   * 客户创建时间-结束
   */
  createTimeEnd?: string

}

export interface RListReportClientSourceVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientSourceVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientSourceVO {
/**
 * 客户来源：00-客户介绍-client；01-网络搜索-net；02-线上注册-online
 */
  source?: string

  /**
   * 客户来源值
   */
  sourceValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientIndustryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientIndustryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientIndustryVO {
/**
 * 行业类别：A-工业 B-商业 C-服务 D-其他
 */
  industry?: string

  /**
   * 行业类别值
   */
  industryValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientEntTypeVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientEntTypeVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientEntTypeVO {
/**
 * 企业类型：A-有限责任公司 B-个体工商户 C-个人独资(合伙)企业 D-民间非盈利组织 E-事业单位 F-股份有限公司 G-国有企业 H-其他 I-有限责任公司分公司 J-其他有限责任公司 K-有限合伙企业 L-小微企业 M-上市公司 N-中央企业 O-普通企业
 */
  enterpriseType?: string

  /**
   * 企业类型值
   */
  enterpriseTypeValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientAreaVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientAreaVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientAreaVO {
/**
 * 省份
 */
  province?: string

  /**
   * 城市
   */
  city?: string

  /**
   * 区县
   */
  district?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportBusinessAnalysisVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessAnalysisVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 人员id
   */
  userId?: string
  _userId?: string
  /**
   * 人员名称
   */
  userName?: string

  /**
   * 销售组织
   */
  saleDeptId?: string
  _saleDeptId?: string
  /**
   * 阶段变更时间开始（区间）
   */
  changeStageStart?: string

  /**
   * 阶段变更时间结束（区间）
   */
  changeStageEnd?: string

  /**
   * 服务项目
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目名称
   */
  itemName?: string

  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 商机Id集合，后端维护，用于商机提成及导出相关条件
   */
  businessIdList?: number[]

}

export interface RReportBusinessCommissionExcelVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCommissionExcelVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCommissionDetailVO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工姓名
   */
  userName?: string

  /**
   * 员工所属组织id
   */
  belongDeptId?: string
  _belongDeptId?: string
  /**
   * 员工所属组织名称
   */
  belongDeptName?: string

  /**
   * 商机编号
   */
  businessCode?: string

  /**
   * 合同编号
   */
  contractCode?: string

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目
   */
  itemName?: string

  /**
   * 合同实收金额
   */
  actualReceiveAmount?: number

  /**
   * 固定业务计提比例
   */
  fixedServiceCommissionRatio?: number

  /**
   * 业务提成总额
   */
  commissionTotal?: number

  /**
   * 商机提供分配比例
   */
  expansionCommissionRatio?: number

  /**
   * 提供成员分配比例
   */
  memberExpansionCommissionRatio?: number

  /**
   * 商机提供计提金额
   */
  expansionCommissionTotalAmount?: number

  /**
   * 商机跟进分配比例
   */
  followCommissionRatio?: number

  /**
   * 跟进成员分配比例
   */
  followMemberCommissionRatio?: number

  /**
   * 商机跟进计提金额
   */
  followCommissionTotalAmount?: number

  /**
   * 商机计提总额
   */
  businessCommissionTotalAmount?: number

}

export interface ReportBusinessCommissionExcelVO {
/**
 * 商机提成计提
 */
  commissionVOList?: ReportBusinessCommissionVO[]

  /**
   * 商机提成计提明细
   */
  commissionDetailVOList?: ReportBusinessCommissionDetailVO[]

}

export interface ReportBusinessCommissionVO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工姓名
   */
  userName?: string

  /**
   * 员工所属组织id
   */
  belongDeptId?: string
  _belongDeptId?: string
  /**
   * 员工所属组织名称
   */
  belongDeptName?: string

  /**
   * 成交商机数量
   */
  businessDoneNum?: number

  /**
   * 商机提供提成金额
   */
  businessProviderCommissionAmount?: number

  /**
   * 商机跟进提成金额
   */
  businessFollowCommissionAmount?: number

  /**
   * 商机提成计提总额
   */
  businessCommissionTotalAmount?: number

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目（搜索条件为空则隐藏该列）
   */
  itemName?: string

}

export interface ReportBusinessQO {
/**
 * 商机创建日期-开始
 */
  bizCreateTimeStart?: string

  /**
   * 商机创建日期-结束
   */
  bizCreateTimeEnd?: string

  /**
   * 商机所属组织
   */
  createOrgIdList?: number[]

  /**
   * 流程模板id
   */
  workflowTmpId?: string
  _workflowTmpId?: string
}

export interface RReportBusinessVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessRankVO {
/**
 * 商机赢单金额（元）
 */
  dealAmount?: number

  /**
   * 赢单商机数量
   */
  dealNum?: number

  /**
   * 商机输单金额（元）
   */
  loseAmount?: number

  /**
   * 赢单商机数量
   */
  loseNum?: number

  /**
   * 商机数量
   */
  businessNum?: number

  /**
   * 商机创建日期
   */
  bizCreateTime?: string

  /**
   * 商机所属组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * orgName
   */
  orgName?: string

}

export interface ReportBusinessStageDetailVO {
/**
 * 商机金额（元）
 */
  amount?: number

  /**
   * 商机阶段
   */
  businessStage?: string

  /**
   * 商机个数
   */
  businessCount?: number

}

export interface ReportBusinessVO {
/**
 * 商机漏斗列表
 */
  reportBusinessList?: ReportBusinessStageDetailVO[]

  /**
   * 商机排名列表
   */
  reportBusinessRankList?: ReportBusinessRankVO[]

}

export interface ExportTaskQO {
/**
 * 客户id
 */
  clientId?: string
  _clientId?: string
  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * id
   */
  id?: string
  _id?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: Record<string, any>

  /**
   * 业务类别
   */
  bizType?: string

}

export interface ExportTaskPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 业务类别
   */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 创建人Id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 创建时间-开始
   */
  createTimeStart?: string

  /**
   * 创建时间-结束
   */
  createTimeEnd?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: Record<string, any>

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: boolean

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
}

export interface ExportTaskVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务类别
   */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatusName?: string

  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: string

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
}

export interface IPageExportTaskVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: ExportTaskVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageExportTaskVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageExportTaskVO

  /**
   * msg
   */
  msg?: string

}

export interface RListExportTaskVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ExportTaskVO[]

  /**
   * msg
   */
  msg?: string

}

export interface UserPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 账号
   */
  account?: string

  /**
   * 头像
   */
  avatar?: string

  /**
   * 生日
   */
  birthday?: string

  /**
   * 用户编号
   */
  code?: string

  /**
   * 创建部门
   */
  createDept?: number

  /**
   * 创建人
   */
  createUser?: number

  /**
   * 当前/默认部门
   */
  curDeptId?: string
  _curDeptId?: string
  /**
   * 当前/默认组织
   */
  curOrgId?: string
  _curOrgId?: string
  /**
   * 部门id
   */
  deptId?: string
  _deptId?: string
  /**
   * 邮箱
   */
  email?: string

  /**
   * 工号
   */
  employeeId?: string
  _employeeId?: string
  /**
   * k3员工编码
   */
  k3UserCode?: string

  /**
   * 主部门
   */
  leaderDeptId?: string
  _leaderDeptId?: string
  /**
   * 主职位
   */
  leaderPostId?: string
  _leaderPostId?: string
  /**
   * 昵称
   */
  name?: string

  /**
   * 密码
   */
  password?: string

  /**
   * 手机
   */
  phone?: string

  /**
   * 岗位id
   */
  postId?: string
  _postId?: string
  /**
   * 企微二维码
   */
  qrCode?: string

  /**
   * 真名
   */
  realName?: string

  /**
   * 角色id
   */
  roleId?: string
  _roleId?: string
  /**
   * 性别
   */
  sex?: number

  /**
   * 状态
   */
  status?: number

  /**
   * 修改人
   */
  updateUser?: number

  /**
   * 用户平台
   */
  userType?: number

  /**
   * 可见组织
   */
  visibleOrgIds?: string

}

export interface RListUser {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: User[]

  /**
   * msg
   */
  msg?: string

}

export interface User {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUser?: number

  /**
   * 创建部门id
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUser?: number

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 用户编号
   */
  code?: string

  /**
   * 用户平台
   */
  userType?: number

  /**
   * 账号
   */
  account?: string

  /**
   * 密码
   */
  password?: string

  /**
   * 昵称
   */
  name?: string

  /**
   * 真名
   */
  realName?: string

  /**
   * 头像
   */
  avatar?: string

  /**
   * 邮箱
   */
  email?: string

  /**
   * 手机
   */
  phone?: string

  /**
   * 生日
   */
  birthday?: string

  /**
   * 性别
   */
  sex?: number

  /**
   * 角色id
   */
  roleId?: string
  _roleId?: string
  /**
   * 可见组织ids
   */
  visibleOrgIds?: string

  /**
   * 默认组织id
   */
  curOrgId?: string
  _curOrgId?: string
  /**
   * 默认部门id
   */
  curDeptId?: string
  _curDeptId?: string
  /**
   * 主组织id
   */
  leaderOrgId?: string
  _leaderOrgId?: string
  /**
   * 部门id
   */
  deptId?: string
  _deptId?: string
  /**
   * 主部门id
   */
  leaderDeptId?: string
  _leaderDeptId?: string
  /**
   * 主职位id
   */
  leaderPostId?: string
  _leaderPostId?: string
  /**
   * 岗位id
   */
  postId?: string
  _postId?: string
  /**
   * 企微二维码
   */
  qrCode?: string

  /**
   * k3员工编码
   */
  k3UserCode?: string

  /**
   * 最近登录 IP
   */
  lastLoginIp?: string

  /**
   * 最近登录 时间
   */
  lastLoginTime?: string

  /**
   * 亿企赢账号对照码
   */
  yqyUserCode?: string

}

export interface RUser {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: User

  /**
   * msg
   */
  msg?: string

}

export interface RListReportRevenueReceivableDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueReceivableDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueReceivableDetailVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 营收客户数据ID
   */
  revenueCustomerId?: string
  _revenueCustomerId?: string
  /**
   * 应收单ID
   */
  receivableId?: string
  _receivableId?: string
  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 应收单到账日期
   */
  receiptDate?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

}

export interface RReportRevenueReceivableDetailDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueReceivableDetailDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueReceivableDetailDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 营收客户数据ID
   */
  revenueCustomerId?: string
  _revenueCustomerId?: string
  /**
   * 应收单ID
   */
  receivableId?: string
  _receivableId?: string
  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 应收单到账日期
   */
  receiptDate?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportRevenueCustomerDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerDataVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerDataVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
}

export interface RReportRevenueCustomerDataDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerDataDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerDataDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportRevenueAmountDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetailVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 客户ID
   */
  clientId?: string
  _clientId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  businessDate?: string

}

export interface RReportRevenueAmountDetailDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetailDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetailDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 客户ID
   */
  clientId?: string
  _clientId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  businessDate?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportOperatingDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
}

export interface RReportOperatingDataDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportBusinessCategoryRankingVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRankingVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRankingVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

}

export interface RReportBusinessCategoryRankingDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRankingDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRankingDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RReportScreenYearlyOperationReportVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenYearlyOperationReportVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenYearlyOperationReportVO {
/**
 * 年度
 */
  年度name?: number

  /**
   * 合同总金额
   */
  contractTotalAmount?: number

  /**
   * 合同总金额单位
   */
  contractTotalAmountUnit?: string

  /**
   * 财税类合同金额
   */
  financialTaxContractAmount?: number

  /**
   * 财税类合同金额单位
   */
  financialTaxContractAmountUnit?: string

  /**
   * 非财税类合同金额
   */
  nonFinancialTaxContractAmount?: number

  /**
   * 非财税类合同金额单位
   */
  nonFinancialTaxContractAmountUnit?: string

  /**
   * 应收总额
   */
  totalReceivableAmount?: number

  /**
   * 应收总额单位
   */
  totalReceivableAmountUnit?: string

  /**
   * 应收收款总额
   */
  totalReceivedAmount?: number

  /**
   * 应收收款总额单位
   */
  totalReceivedAmountUnit?: string

  /**
   * 应收未收款总额
   */
  totalUnreceivedAmount?: number

  /**
   * 应收未收款总额单位
   */
  totalUnreceivedAmountUnit?: string

}

export interface RListReportScreenSalesTrendVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenSalesTrendVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenSalesTrendVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 年度
   */
  year?: number

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
}

export interface RListRankTargetCompletionRateVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankTargetCompletionRateVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankTargetCompletionRateVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 销售目标完成率
   */
  targetCompletionRate?: number

}

export interface RListRankReceivableAmountVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankReceivableAmountVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankReceivableAmountVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

}

export interface RListRankContractAmountVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankContractAmountVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankContractAmountVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

}

export interface RReportScreenRegionMapTotalVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapTotalVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenRegionMapTotalVO {
/**
 * 年月
 */
  yearAndMonth?: string

  /**
   * 当月营业收入金额
   */
  receivableAmount?: number

  /**
   * 当月签约金额
   */
  contractAmount?: number

  /**
   * 应收收入金额单位
   */
  receivableAmountUnit?: string

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

}

export interface RReportScreenRegionMapRankingVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapRankingVO

  /**
   * msg
   */
  msg?: string

}

export interface RankingVO {
/**
 * 排名
 */
  ranking?: number

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 金额
   */
  amount?: number

  /**
   * 金额单位
   */
  amountUnit?: string

  /**
   * 销售组织id
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

}

export interface ReportScreenRegionMapRankingVO {
/**
 * 营业总额排名
 */
  totalRevenueRanking?: RankingVO[]

  /**
   * 签约金额排名
   */
  contractAmountRanking?: RankingVO[]

}

export interface ReportScreenRegionMapDataPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 时间
   */
  mapDate?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 客户数
   */
  signedCustomers?: number

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 镇
   */
  town?: string

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: number

}

export interface RListReportScreenRegionMapVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenRegionMapVO {
/**
 * 时间
 */
  date?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 客户数
   */
  signedCustomers?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 镇
   */
  town?: string

  /**
   * 区域名称
   */
  regionName?: string

}

export interface RListReportScreenProductRevenueShareVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenProductRevenueShareVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenProductRevenueShareVO {
/**
 * 服务项目编码
 */
  serviceItemCode?: string

  /**
   * 服务项目名
   */
  serviceItemName?: string

  /**
   * 排序
   */
  ranking?: number

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 金额单位
   */
  totalAmountUnit?: string

}

export interface RListReportScreenBusinessRevenueShareVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenBusinessRevenueShareVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenBusinessRevenueShareVO {
/**
 * 业务类别编码
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别名
   */
  categoryName?: string

  /**
   * 占比
   */
  ratio?: number

  /**
   * 排序
   */
  ranking?: number

}

export interface RListReportRevenueCustomerData {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerData[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerData {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
}

export interface RReportRevenueAmountDetail {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetail

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetail {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  yearAndMonth?: string

}

export interface ReportOperatingDataPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

}

export interface IPageReportOperatingDataVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: ReportOperatingDataVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageReportOperatingDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageReportOperatingDataVO

  /**
   * msg
   */
  msg?: string

}

export interface OperatingDataInfo {
/**
 * 本月新签合同金额
 */
  contractAmount?: number

  /**
   * 金额单位
   */
  amountUnit?: string

  /**
   * 本月新签合同数量
   */
  contractNum?: number

  /**
   * 本月新签合同数量比率
   */
  contractNumRate?: number

  /**
   * 本月新签合同金额比率
   */
  contractAmountRate?: number

}

export interface RReportOperatingDataInfo {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataInfo

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataInfo {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * newContract
   */
  newContract?: OperatingDataInfo

  /**
   * renewContract
   */
  renewContract?: OperatingDataInfo

  /**
   * newContractYear
   */
  newContractYear?: OperatingDataInfo

  /**
   * renewContractYear
   */
  renewContractYear?: OperatingDataInfo

  /**
   * stopContractYear
   */
  stopContractYear?: OperatingDataInfo

}

export interface RListReportBusinessCategoryRanking {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRanking[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRanking {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

}

export interface ExportTaskDtlVO {
/**
 * 业务类别
 */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 创建部门
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 创建人
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * id
   */
  id?: string
  _id?: string
  /**
   * 是否已删除
   */
  isDeleted?: boolean

  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: string

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: boolean

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 修改时间
   */
  updateTime?: string

  /**
   * 修改人
   */
  updateUserId?: string
  _updateUserId?: string
}

export interface RExportTaskDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ExportTaskDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface WechatAssessmentQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 企微群id
   */
  chat_id?: string
  _chat_id?: string
  /**
   * 企微群名称
   */
  name?: string

  /**
   * crm客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * crm客户名称
   */
  clientName?: string

  /**
   * 亿企赢绑定手机号
   */
  loginName?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工名称
   */
  userName?: number

  /**
   * 开始时间
   */
  startDate?: string

  /**
   * 结束时间
   */
  endDate?: string

}

export interface IPageWechatEmployeeConversationVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: WechatEmployeeConversationVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageWechatEmployeeConversationVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageWechatEmployeeConversationVO

  /**
   * msg
   */
  msg?: string

}

export interface WechatEmployeeConversationVO {
/**
 * 员工姓名
 */
  userName?: string

  /**
   * 所属组织Id
   */
  orgId?: string
  _orgId?: string
  /**
   * 联系客户数
   */
  contactClientNum?: number

  /**
   * 活跃客户数
   */
  activeClientNum?: number

  /**
   * 沉默客户数
   */
  inactiveClientNum?: number

  /**
   * 咨询会话数
   */
  clientContactNum?: number

  /**
   * 回复会话数
   */
  replyClientNum?: number

  /**
   * 未回复会话数
   */
  noReplyClientNum?: number

  /**
   * 咨询回复率
   */
  replyRatio?: string

  /**
   * 平均会话时长
   */
  avgDuration?: string

  /**
   * 发送消息总数
   */
  contactClientMsgNum?: number

  /**
   * 主动发送消息数
   */
  proactiveMsgNum?: number

  /**
   * 与客户沟通确认申报税款通知次数
   */
  taxConfirmNum?: number

}

export interface IPageWechatClientConversationVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: WechatClientConversationVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageWechatClientConversationVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageWechatClientConversationVO

  /**
   * msg
   */
  msg?: string

}

export interface WechatClientConversationVO {
/**
 * 企业名称
 */
  clientName?: string

  /**
   * 所属组织Id
   */
  orgId?: string
  _orgId?: string
  /**
   * 员工发送消息数
   */
  employeeMsgNum?: number

  /**
   * 客户发送消息数
   */
  clientMsgNum?: number

  /**
   * 咨询会话数
   */
  clientContactNum?: number

  /**
   * 回复会话数
   */
  replyClientNum?: number

  /**
   * 未回复会话数
   */
  noReplyClientNum?: number

  /**
   * 咨询回复率
   */
  replyRatio?: string

  /**
   * 平均会话时长
   */
  avgDuration?: string

  /**
   * 关联企微群名称
   */
  weChatGroupName?: string

  /**
   * 是否及时建群
   */
  isPromptlySetUp?: string

  /**
   * 与客户沟通确认申报税款通知次数
   */
  taxConfirmNum?: number

}

export interface TestUser {
/**
 * id
 */
  id?: string
  _id?: string
  /**
   * name
   */
  name?: string

  /**
   * age
   */
  age?: number

  /**
   * height
   */
  height?: number

}

export interface R {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: Record<string, any>

  /**
   * msg
   */
  msg?: string

}

export interface SalesBusinessQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 销售员id
   */
  salesmanIds?: number[]

  /**
   * 销售（业务）组织
   */
  saleOrgIds?: number[]

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 业务类别id
   */
  categoryIds?: number[]

  /**
   * 服务项目id
   */
  itemIds?: number[]

  /**
   * 签订开始日期
   */
  signBeginDate?: string

  /**
   * 签订结束日期
   */
  signEndDate?: string

  /**
   * 上期签订开始日期
   */
  lastSignBeginDate?: string

  /**
   * 上期签订结束日期
   */
  lastSignEndDate?: string

  /**
   * 协议金额开始
   */
  contractAmountBegin?: number

  /**
   * 协议金额结束
   */
  contractAmountEnd?: number

  /**
   * 合同状态
   */
  contractStatus?: string[]

  /**
   * 销售部门id
   */
  saleDeptIds?: number[]

  /**
   * 新增与流失查询标识
   */
  newLostQuery?: boolean

  /**
   * 导出请求类型(1:员工,2:组织)
   */
  exportType?: number

  /**
   * 新增流失查询类型(0:上期合同明细,1:本期合同明细,2:续签合同明细,3:新签合同明细,4:流失合同明细
   */
  newLostQueryType?: string

}

export interface IPageSalesmanBusinessDetailVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: SalesmanBusinessDetailVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageSalesmanBusinessDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageSalesmanBusinessDetailVO

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessDetailVO {
/**
 * 客户id
 */
  clientId?: string
  _clientId?: string
  /**
   * 客户名称
   */
  clientName?: string

  /**
   * 销售员id
   */
  saleUserId?: string
  _saleUserId?: string
  /**
   * 销售员名称
   */
  saleUserName?: string

  /**
   * 协议编号
   */
  contractCode?: string

  /**
   * 销售（业务）组织
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

  /**
   * 销售部门id
   */
  saleDeptId?: string
  _saleDeptId?: string
  /**
   * 销售部门名称
   */
  saleDeptName?: string

  /**
   * 业务类别id
   */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别名称
   */
  categoryName?: string

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目名称
   */
  itemName?: string

  /**
   * 签订日期
   */
  signDate?: string

  /**
   * 服务开始日期
   */
  serviceBeginDate?: string

  /**
   * 服务结束日期
   */
  serviceEndDate?: string

  /**
   * 协议金额
   */
  contractAmount?: number

  /**
   * 实收金额
   */
  actualReceiveAmount?: number

  /**
   * 签订类型
   */
  signType?: string

}

export interface IPageSalesmanBusinessRankVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: SalesmanBusinessRankVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageSalesmanBusinessRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageSalesmanBusinessRankVO

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessRankVO {
/**
 * 销售员ID
 */
  saleUserId?: string
  _saleUserId?: string
  /**
   * 销售员名称
   */
  saleUserName?: string

  /**
   * 协议份数
   */
  totalContractNum?: number

  /**
   * 协议总额
   */
  totalAmount?: number

  /**
   * 实收总额
   */
  totalActualAmount?: number

  /**
   * 集团内排名
   */
  groupRank?: number

  /**
   * 组织内排名
   */
  orgRank?: number

  /**
   * 部门内排名
   */
  deptRank?: number

}

export interface RListSalesmanBusinessOrgRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesmanBusinessOrgRankVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesmanBusinessOrgRankVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织
   */
  saleOrgName?: string

  /**
   * 协议份数
   */
  totalContractNum?: number

  /**
   * 协议总额
   */
  totalAmount?: number

  /**
   * 实收总额
   */
  totalActualAmount?: number

}

export interface RListSalesmanBusinessDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesmanBusinessDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RListSalesNewLostDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesNewLostDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesNewLostDetailVO {
/**
 * 业务类别ID
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别
   */
  categoryName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目
   */
  serviceItemName?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 上期协议数
   */
  lastContractNum?: number

  /**
   * 本期协议数
   */
  currentContractNum?: number

  /**
   * 新增协议数
   */
  newContractNum?: number

  /**
   * 续签协议数
   */
  renewContractNum?: number

  /**
   * 流失协议数
   */
  churnContractNum?: number

}

export interface RListSalesServiceGrowthDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesServiceGrowthDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesServiceGrowthDetailVO {
/**
 * 业务类别ID
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别
   */
  categoryName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目
   */
  serviceItemName?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 上期协议数
   */
  lastContractNum?: number

  /**
   * 上期业务总额
   */
  lastContractAmount?: number

  /**
   * 本期协议数
   */
  currentContractNum?: number

  /**
   * 本期业务总额
   */
  currentContractAmount?: number

  /**
   * 协议增长数
   */
  contractNumGrowth?: number

  /**
   * 协议增长金额
   */
  contractAmountGrowth?: number

  /**
   * 协议数增长率
   */
  contractNumGrowthRate?: string

  /**
   * 协议金额增长率
   */
  contractAmountGrowthRate?: string

  /**
   * 业务占比
   */
  serviceProportion?: string

  /**
   * 组织业务增长排名
   */
  orgGrowthRank?: string

}

export interface BookKeepingStatisticsQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 销售员id
   */
  salesmanIds?: number[]

  /**
   * 销售（业务）组织
   */
  saleOrgIds?: number[]

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 业务类别id
   */
  categoryIds?: number[]

  /**
   * 服务项目id
   */
  itemIds?: number[]

  /**
   * 签订开始日期
   */
  signBeginDate?: string

  /**
   * 签订结束日期
   */
  signEndDate?: string

  /**
   * 上期签订开始日期
   */
  lastSignBeginDate?: string

  /**
   * 上期签订结束日期
   */
  lastSignEndDate?: string

  /**
   * 协议金额开始
   */
  contractAmountBegin?: number

  /**
   * 协议金额结束
   */
  contractAmountEnd?: number

  /**
   * 合同状态
   */
  contractStatus?: string[]

  /**
   * 企业类型
   */
  enterpriseType?: string

  /**
   * 企业规模
   */
  enterpriseSize?: string

  /**
   * 企业所得税征收方式
   */
  enterpriseTaxType?: string

  /**
   * 行业类别
   */
  industryType?: string

  /**
   * 企业特征
   */
  enterpriseCharacter?: string

  /**
   * 客户类别
   */
  clientType?: string

  /**
   * 上期年度
   */
  lastYear?: string

  /**
   * 本期年度
   */
  currentYear?: string

}

export interface BookKeepingLostVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 年度服务客户数
   */
  totalContractNum?: number

  /**
   * 小规模以上流失户数（非正常流失）
   */
  abnormalScaledLostContractNum?: number

  /**
   * 小规模以上流失率（非正常流失）
   */
  abnormalScaledLostRate?: string

  /**
   * 个体户流失户数（非正常流失）
   */
  abnormalIndividualLostContractNum?: number

  /**
   * 个体户流失率（非正常流失）
   */
  abnormalIndividualLostRate?: string

  /**
   * 总流失户数（非正常流失）
   */
  abnormalTotalLostContractNum?: number

  /**
   * 总流失率（非正常流失）
   */
  abnormalTotalLostRate?: string

  /**
   * 小规模以上流失户数（总流失）
   */
  totalScaledLostContractNum?: number

  /**
   * 小规模以上流失率（总流失）
   */
  totalScaledLostRate?: string

  /**
   * 个体户流失户数（总流失）
   */
  totalIndividualOwnerLostContractNum?: number

  /**
   * 个体户流失率（总流失）
   */
  totalIndividualOwnerLostRate?: string

  /**
   * 总流失户数
   */
  totalLostContractNum?: number

  /**
   * 总流失率（非正常流失）
   */
  totalLostRate?: string

}

export interface RListBookKeepingLostVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingLostVO[]

  /**
   * msg
   */
  msg?: string

}

export interface BookKeepingGrowthVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 上期户数（小规模以上）
   */
  scaledLastContractNum?: number

  /**
   * 本期户数（小规模以上）
   */
  scaledCurrentContractNum?: number

  /**
   * 增长户数（小规模以上）
   */
  scaledContractNumGrowth?: number

  /**
   * 增长比率（小规模以上）
   */
  scaledGrowthRate?: string

  /**
   * 上期户数（个体户）
   */
  individualOwnerLastContractNum?: number

  /**
   * 本期户数（个体户）
   */
  individualOwnerCurrentContractNum?: number

  /**
   * 增长户数（个体户）
   */
  individualOwnerContractNumGrowth?: number

  /**
   * 增长比率（个体户）
   */
  individualOwnerGrowthRate?: string

  /**
   * 上期总户数
   */
  totalLastContractNum?: number

  /**
   * 本期总户数
   */
  totalCurrentContractNum?: number

  /**
   * 总增长户数
   */
  totalContractNumGrowth?: number

  /**
   * 总增长比率
   */
  totalGrowthRate?: string

}

export interface RListBookKeepingGrowthVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingGrowthVO[]

  /**
   * msg
   */
  msg?: string

}

export interface BookKeepingClientCompositionVO {
/**
 * 销售组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

  /**
   * 户数
   */
  totalContractNum?: number

  /**
   * 比例
   */
  proportion?: string

  /**
   * 协议总金额
   */
  totalContractAmount?: number

  /**
   * 应收总金额
   */
  totalReceivableAmount?: number

}

export interface RListBookKeepingClientCompositionVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: BookKeepingClientCompositionVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataQO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
}

export interface RBoolean {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: boolean

  /**
   * msg
   */
  msg?: string

}

export interface MobileBranchSalesDetailVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 业务签约总额
   */
  contractAmount?: number

  /**
   * 协议签约金额
   */
  contractTypeAmount?: number

  /**
   * 销售目标
   */
  salesTargetAmount?: number

  /**
   * 销售目标完成率
   */
  targetCompletionRate?: number

}

export interface MobileBranchSalesRankVO {
/**
 * 销售前五列表
 */
  topList?: MobileBranchSalesDetailVO[]

  /**
   * 销售后五列表
   */
  lastList?: MobileBranchSalesDetailVO[]

}

export interface RMobileBranchSalesRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileBranchSalesRankVO

  /**
   * msg
   */
  msg?: string

}

export interface MobileSalesSummaryVO {
/**
 * 销售（业务）组织ID
 */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

  /**
   * 财税类当年签约数
   */
  taxServiceYearlyTotalContract?: number

  /**
   * 财税类当年签约总额
   */
  taxServiceYearlyTotalAmount?: number

  /**
   * 财税类当月签约数
   */
  taxServiceMonthlyTotalContract?: number

  /**
   * 财税类当月签约总额
   */
  taxServiceMonthlyTotalAmount?: number

  /**
   * 非财税类当年签约数
   */
  nonTaxServiceYearlyTotalContract?: number

  /**
   * 非财税类当年签约总额
   */
  nonTaxServiceYearlyTotalAmount?: number

  /**
   * 非财税类当月签约数
   */
  nonTaxServiceMonthlyTotalContract?: number

  /**
   * 非财税类当月签约总额
   */
  nonTaxServiceMonthlyTotalAmount?: number

  /**
   * 当年签约数
   */
  yearlyTotalContract?: number

  /**
   * 当年签约总额
   */
  yearlyTotalAmount?: number

  /**
   * 当月签约数
   */
  monthlyTotalContract?: number

  /**
   * 当月签约总额
   */
  monthlyTotalAmount?: number

  /**
   * 当年营收总额
   */
  yearlyTotalIncome?: number

  /**
   * 财税类占比
   */
  taxContractRatio?: number

  /**
   * 非财税类占比
   */
  nonTaxServiceRatio?: number

}

export interface RMobileSalesSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileSalesSummaryVO

  /**
   * msg
   */
  msg?: string

}

export interface RReportBusinessAnalysisVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessAnalysisVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessAnalysisVO {
/**
 * 组织id
 */
  orgId?: string
  _orgId?: string
  /**
   * 组织名称
   */
  orgName?: string

  /**
   * 本月新增商机
   */
  monthNewNum?: number

  /**
   * 本月商机金额
   */
  monthNewAmount?: number

  /**
   * 本月赢单商机
   */
  monthDealNum?: number

  /**
   * 本月赢单金额
   */
  monthDealAmount?: number

  /**
   * 本年新增商机
   */
  yearNewNum?: number

  /**
   * 本年商机金额
   */
  yearNewAmount?: number

  /**
   * 本年赢单商机
   */
  yearDealNum?: number

  /**
   * 本年赢单金额
   */
  yearDealAmount?: number

  /**
   * 本年输单商机
   */
  yearLoseNum?: number

  /**
   * 本年输单金额
   */
  yearLoseAmount?: number

  /**
   * 跟进中的商机
   */
  followingNum?: number

  /**
   * 赢单率(年)
   */
  dealRate?: number

  /**
   * 输单率(年)
   */
  loseRate?: number

}

export interface MobileStatisticsQO {
/**
 * 组织id
 */
  orgIds?: number[]

  /**
   * 开始时间
   */
  startDate?: string

  /**
   * 结束时间
   */
  endDate?: string

  /**
   * 排名
   */
  sort?: string

}

export interface ClientSummaryVO {
/**
 * 客户数
 */
  clientCount?: number

  /**
   * 金额
   */
  actualReceiveAmount?: number

  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

}

export interface MobileClientStatisticsVO {
/**
 * 新增客户数
 */
  newClientCount?: number

  /**
   * 成交客户数
   */
  closedClientCount?: number

  /**
   * 成交总额
   */
  totalSales?: number

  /**
   * 客户统计列表
   */
  closedClientRank?: ClientSummaryVO[]

}

export interface RMobileClientStatisticsVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: MobileClientStatisticsVO

  /**
   * msg
   */
  msg?: string

}

export interface DepositMenberQO {
/**
 * 销售组织IDs
 */
  salesOrgIds?: number[]

  /**
   * 销售员IDs
   */
  salesmanIds?: number[]

  /**
   * 预存年数
   */
  depositYears?: number

}

export interface OrgDepositObjVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 人均户数指标
   */
  depositNumObj?: number

  /**
   * 人均业绩指标
   */
  depositAmountObj?: number

}

export interface RListOrgDepositObjVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgDepositObjVO[]

  /**
   * msg
   */
  msg?: string

}

export interface OrgDepositRankVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 预存总户数
   */
  totalNum?: number

  /**
   * 预存总金额
   */
  totalAmount?: number

  /**
   * 一年预存总户数
   */
  oneYearDepositNum?: number

  /**
   * 一年预存总金额
   */
  oneYearDepositAmount?: number

  /**
   * 一年预存提成总额（未考核）
   */
  oneYearTotalBonus?: number

  /**
   * 一年预存实际应发提成
   */
  oneYearActualBonus?: number

  /**
   * 两年预存总户数
   */
  twoYearDepositNum?: number

  /**
   * 两年预存总金额
   */
  twoYearDepositAmount?: number

  /**
   * 两年预存提成总额（未考核）
   */
  twoYearTotalBonus?: number

  /**
   * 两年预存实际应发提成
   */
  twoYearActualBonus?: number

  /**
   * 三年预存总户数
   */
  threeYearDepositNum?: number

  /**
   * 三年预存总金额
   */
  threeYearDepositAmount?: number

  /**
   * 三年预存提成总额（未考核）
   */
  threeYearTotalBonus?: number

  /**
   * 三年预存实际应发提成
   */
  threeYearActualBonus?: number

  /**
   * 提成总额（未考核）
   */
  totalBonus?: number

  /**
   * 占预存比例（未考核）
   */
  bonusProportion?: string

  /**
   * 实际应发提成总额
   */
  totalActualBonus?: number

  /**
   * 人均户数目标
   */
  depositNumObj?: number

  /**
   * 人均业绩目标
   */
  depositAmountObj?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

}

export interface RListOrgDepositRankVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgDepositRankVO[]

  /**
   * msg
   */
  msg?: string

}

export interface EmployeeDepositDetailVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 销售员ID
   */
  salesmanId?: string
  _salesmanId?: string
  /**
   * 销售员名称
   */
  salesmanName?: string

  /**
   * 预存总户数
   */
  totalNum?: number

  /**
   * 预存总金额
   */
  totalAmount?: number

  /**
   * 一年预存总户数
   */
  oneYearDepositNum?: number

  /**
   * 一年预存总金额
   */
  oneYearDepositAmount?: number

  /**
   * 一年预存提成总额（未考核）
   */
  oneYearTotalBonus?: number

  /**
   * 一年预存实际应发提成
   */
  oneYearActualBonus?: number

  /**
   * 两年预存总户数
   */
  twoYearDepositNum?: number

  /**
   * 两年预存总金额
   */
  twoYearDepositAmount?: number

  /**
   * 两年预存提成总额（未考核）
   */
  twoYearTotalBonus?: number

  /**
   * 两年预存实际应发提成
   */
  twoYearActualBonus?: number

  /**
   * 三年预存总户数
   */
  threeYearDepositNum?: number

  /**
   * 三年预存总金额
   */
  threeYearDepositAmount?: number

  /**
   * 三年预存提成总额（未考核）
   */
  threeYearTotalBonus?: number

  /**
   * 三年预存实际应发提成
   */
  threeYearActualBonus?: number

  /**
   * 提成总额（未考核）
   */
  totalBonus?: number

  /**
   * 实际应发提成总额
   */
  totalActualBonus?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

  /**
   * 目标户数系数
   */
  numObjCoef?: number

  /**
   * 目标业绩系数
   */
  amountObjCoef?: number

  /**
   * 总系数
   */
  finalCoef?: number

}

export interface OrgGroupingEmployeeDetailVO {
/**
 * 销售组织ID
 */
  salesOrgId?: string
  _salesOrgId?: string
  /**
   * 销售组织名称
   */
  salesOrgName?: string

  /**
   * 组织人员明细列表
   */
  employeeDepositDetailList?: EmployeeDepositDetailVO[]

  /**
   * 人均户数指标
   */
  depositNumObj?: number

  /**
   * 人均业绩指标
   */
  depositAmountObj?: number

  /**
   * 2024年付总额一半
   */
  firstPay?: number

  /**
   * 2025年付预存一年余额
   */
  secondPay?: number

  /**
   * 2026年付预存两年余额
   */
  thirdPay?: number

  /**
   * 2027年付预存三年余额
   */
  forthPay?: number

}

export interface RListOrgGroupingEmployeeDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: OrgGroupingEmployeeDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesSummaryQO {
/**
 * 服务开始日期
 */
  serviceBeginDate?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

  /**
   * 服务结束日期
   */
  serviceEndDate?: string

}

export interface RListSalesSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: SalesSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface SalesSummaryVO {
/**
 * 实际应收金额
 */
  actualReceiveAmount?: number

  /**
   * 销售（业务）组织名称
   */
  saleOrgName?: string

}

export interface ProductSaleSummaryQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

  /**
   * 服务项目id列表
   */
  itemIdList?: number[]

}

export interface ProductSaleSummaryVO {
/**
 * 合同数
 */
  contractCount?: number

  /**
   * 合同总额
   */
  totalAmount?: number

  /**
   * 服务项目
   */
  itemName?: string

}

export interface RListProductSaleSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ProductSaleSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ClientValueQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

}

export interface ClientValueAmountVO {
/**
 * 实际应收金额
 */
  actualReceiveAmount?: number

  /**
   * 客户名称
   */
  clientName?: string

}

export interface ClientValueItemCountVO {
/**
 * 服务数
 */
  itemCount?: number

  /**
   * 客户名称
   */
  clientName?: string

}

export interface ClientValueVO {
/**
 * 业务前30客户
 */
  itemList?: ClientValueItemCountVO[]

  /**
   * 金额前30客户
   */
  amountList?: ClientValueAmountVO[]

}

export interface RClientValueVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ClientValueVO

  /**
   * msg
   */
  msg?: string

}

export interface ClientSummaryQO {
/**
 * 复核时间-开始
 */
  auditCheckTimeStart?: string

  /**
   * 复核时间-结束
   */
  auditCheckTimeEnd?: string

  /**
   * 销售组织id列表
   */
  saleOrgIdList?: number[]

}

export interface RListClientSummaryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ClientSummaryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientProfileQO {
/**
 * 客户创建时间-开始
 */
  createTimeStart?: string

  /**
   * 客户创建时间-结束
   */
  createTimeEnd?: string

}

export interface RListReportClientSourceVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientSourceVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientSourceVO {
/**
 * 客户来源：00-客户介绍-client；01-网络搜索-net；02-线上注册-online
 */
  source?: string

  /**
   * 客户来源值
   */
  sourceValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientIndustryVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientIndustryVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientIndustryVO {
/**
 * 行业类别：A-工业 B-商业 C-服务 D-其他
 */
  industry?: string

  /**
   * 行业类别值
   */
  industryValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientEntTypeVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientEntTypeVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientEntTypeVO {
/**
 * 企业类型：A-有限责任公司 B-个体工商户 C-个人独资(合伙)企业 D-民间非盈利组织 E-事业单位 F-股份有限公司 G-国有企业 H-其他 I-有限责任公司分公司 J-其他有限责任公司 K-有限合伙企业 L-小微企业 M-上市公司 N-中央企业 O-普通企业
 */
  enterpriseType?: string

  /**
   * 企业类型值
   */
  enterpriseTypeValue?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportClientAreaVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportClientAreaVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportClientAreaVO {
/**
 * 省份
 */
  province?: string

  /**
   * 城市
   */
  city?: string

  /**
   * 区县
   */
  district?: string

  /**
   * 客户数
   */
  clientCount?: number

}

export interface RListReportBusinessAnalysisVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessAnalysisVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 人员id
   */
  userId?: string
  _userId?: string
  /**
   * 人员名称
   */
  userName?: string

  /**
   * 销售组织
   */
  saleDeptId?: string
  _saleDeptId?: string
  /**
   * 阶段变更时间开始（区间）
   */
  changeStageStart?: string

  /**
   * 阶段变更时间结束（区间）
   */
  changeStageEnd?: string

  /**
   * 服务项目
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目名称
   */
  itemName?: string

  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 商机Id集合，后端维护，用于商机提成及导出相关条件
   */
  businessIdList?: number[]

}

export interface RReportBusinessCommissionExcelVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCommissionExcelVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCommissionDetailVO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工姓名
   */
  userName?: string

  /**
   * 员工所属组织id
   */
  belongDeptId?: string
  _belongDeptId?: string
  /**
   * 员工所属组织名称
   */
  belongDeptName?: string

  /**
   * 商机编号
   */
  businessCode?: string

  /**
   * 合同编号
   */
  contractCode?: string

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目
   */
  itemName?: string

  /**
   * 合同实收金额
   */
  actualReceiveAmount?: number

  /**
   * 固定业务计提比例
   */
  fixedServiceCommissionRatio?: number

  /**
   * 业务提成总额
   */
  commissionTotal?: number

  /**
   * 商机提供分配比例
   */
  expansionCommissionRatio?: number

  /**
   * 提供成员分配比例
   */
  memberExpansionCommissionRatio?: number

  /**
   * 商机提供计提金额
   */
  expansionCommissionTotalAmount?: number

  /**
   * 商机跟进分配比例
   */
  followCommissionRatio?: number

  /**
   * 跟进成员分配比例
   */
  followMemberCommissionRatio?: number

  /**
   * 商机跟进计提金额
   */
  followCommissionTotalAmount?: number

  /**
   * 商机计提总额
   */
  businessCommissionTotalAmount?: number

}

export interface ReportBusinessCommissionExcelVO {
/**
 * 商机提成计提
 */
  commissionVOList?: ReportBusinessCommissionVO[]

  /**
   * 商机提成计提明细
   */
  commissionDetailVOList?: ReportBusinessCommissionDetailVO[]

}

export interface ReportBusinessCommissionVO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * 员工id
   */
  userId?: string
  _userId?: string
  /**
   * 员工姓名
   */
  userName?: string

  /**
   * 员工所属组织id
   */
  belongDeptId?: string
  _belongDeptId?: string
  /**
   * 员工所属组织名称
   */
  belongDeptName?: string

  /**
   * 成交商机数量
   */
  businessDoneNum?: number

  /**
   * 商机提供提成金额
   */
  businessProviderCommissionAmount?: number

  /**
   * 商机跟进提成金额
   */
  businessFollowCommissionAmount?: number

  /**
   * 商机提成计提总额
   */
  businessCommissionTotalAmount?: number

  /**
   * 服务项目id
   */
  itemId?: string
  _itemId?: string
  /**
   * 服务项目（搜索条件为空则隐藏该列）
   */
  itemName?: string

}

export interface ReportBusinessQO {
/**
 * 商机创建日期-开始
 */
  bizCreateTimeStart?: string

  /**
   * 商机创建日期-结束
   */
  bizCreateTimeEnd?: string

  /**
   * 商机所属组织
   */
  createOrgIdList?: number[]

  /**
   * 流程模板id
   */
  workflowTmpId?: string
  _workflowTmpId?: string
}

export interface RReportBusinessVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessRankVO {
/**
 * 商机赢单金额（元）
 */
  dealAmount?: number

  /**
   * 赢单商机数量
   */
  dealNum?: number

  /**
   * 商机输单金额（元）
   */
  loseAmount?: number

  /**
   * 赢单商机数量
   */
  loseNum?: number

  /**
   * 商机数量
   */
  businessNum?: number

  /**
   * 商机创建日期
   */
  bizCreateTime?: string

  /**
   * 商机所属组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * orgName
   */
  orgName?: string

}

export interface ReportBusinessStageDetailVO {
/**
 * 商机金额（元）
 */
  amount?: number

  /**
   * 商机阶段
   */
  businessStage?: string

  /**
   * 商机个数
   */
  businessCount?: number

}

export interface ReportBusinessVO {
/**
 * 商机漏斗列表
 */
  reportBusinessList?: ReportBusinessStageDetailVO[]

  /**
   * 商机排名列表
   */
  reportBusinessRankList?: ReportBusinessRankVO[]

}

export interface ExportTaskQO {
/**
 * 客户id
 */
  clientId?: string
  _clientId?: string
  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * id
   */
  id?: string
  _id?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: Record<string, any>

  /**
   * 业务类别
   */
  bizType?: string

}

export interface ExportTaskPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 业务类别
   */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 创建人Id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 创建时间-开始
   */
  createTimeStart?: string

  /**
   * 创建时间-结束
   */
  createTimeEnd?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: Record<string, any>

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: boolean

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
}

export interface ExportTaskVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务类别
   */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatusName?: string

  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: string

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
}

export interface IPageExportTaskVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: ExportTaskVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageExportTaskVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageExportTaskVO

  /**
   * msg
   */
  msg?: string

}

export interface RListExportTaskVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ExportTaskVO[]

  /**
   * msg
   */
  msg?: string

}

export interface UserPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 账号
   */
  account?: string

  /**
   * 头像
   */
  avatar?: string

  /**
   * 生日
   */
  birthday?: string

  /**
   * 用户编号
   */
  code?: string

  /**
   * 创建部门
   */
  createDept?: number

  /**
   * 创建人
   */
  createUser?: number

  /**
   * 当前/默认部门
   */
  curDeptId?: string
  _curDeptId?: string
  /**
   * 当前/默认组织
   */
  curOrgId?: string
  _curOrgId?: string
  /**
   * 部门id
   */
  deptId?: string
  _deptId?: string
  /**
   * 邮箱
   */
  email?: string

  /**
   * 工号
   */
  employeeId?: string
  _employeeId?: string
  /**
   * k3员工编码
   */
  k3UserCode?: string

  /**
   * 主部门
   */
  leaderDeptId?: string
  _leaderDeptId?: string
  /**
   * 主职位
   */
  leaderPostId?: string
  _leaderPostId?: string
  /**
   * 昵称
   */
  name?: string

  /**
   * 密码
   */
  password?: string

  /**
   * 手机
   */
  phone?: string

  /**
   * 岗位id
   */
  postId?: string
  _postId?: string
  /**
   * 企微二维码
   */
  qrCode?: string

  /**
   * 真名
   */
  realName?: string

  /**
   * 角色id
   */
  roleId?: string
  _roleId?: string
  /**
   * 性别
   */
  sex?: number

  /**
   * 状态
   */
  status?: number

  /**
   * 修改人
   */
  updateUser?: number

  /**
   * 用户平台
   */
  userType?: number

  /**
   * 可见组织
   */
  visibleOrgIds?: string

}

export interface RListUser {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: User[]

  /**
   * msg
   */
  msg?: string

}

export interface User {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUser?: number

  /**
   * 创建部门id
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUser?: number

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 用户编号
   */
  code?: string

  /**
   * 用户平台
   */
  userType?: number

  /**
   * 账号
   */
  account?: string

  /**
   * 密码
   */
  password?: string

  /**
   * 昵称
   */
  name?: string

  /**
   * 真名
   */
  realName?: string

  /**
   * 头像
   */
  avatar?: string

  /**
   * 邮箱
   */
  email?: string

  /**
   * 手机
   */
  phone?: string

  /**
   * 生日
   */
  birthday?: string

  /**
   * 性别
   */
  sex?: number

  /**
   * 角色id
   */
  roleId?: string
  _roleId?: string
  /**
   * 可见组织ids
   */
  visibleOrgIds?: string

  /**
   * 默认组织id
   */
  curOrgId?: string
  _curOrgId?: string
  /**
   * 默认部门id
   */
  curDeptId?: string
  _curDeptId?: string
  /**
   * 主组织id
   */
  leaderOrgId?: string
  _leaderOrgId?: string
  /**
   * 部门id
   */
  deptId?: string
  _deptId?: string
  /**
   * 主部门id
   */
  leaderDeptId?: string
  _leaderDeptId?: string
  /**
   * 主职位id
   */
  leaderPostId?: string
  _leaderPostId?: string
  /**
   * 岗位id
   */
  postId?: string
  _postId?: string
  /**
   * 企微二维码
   */
  qrCode?: string

  /**
   * k3员工编码
   */
  k3UserCode?: string

  /**
   * 最近登录 IP
   */
  lastLoginIp?: string

  /**
   * 最近登录 时间
   */
  lastLoginTime?: string

  /**
   * 亿企赢账号对照码
   */
  yqyUserCode?: string

}

export interface RUser {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: User

  /**
   * msg
   */
  msg?: string

}

export interface RListReportRevenueReceivableDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueReceivableDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueReceivableDetailVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 营收客户数据ID
   */
  revenueCustomerId?: string
  _revenueCustomerId?: string
  /**
   * 应收单ID
   */
  receivableId?: string
  _receivableId?: string
  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 应收单到账日期
   */
  receiptDate?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

}

export interface RReportRevenueReceivableDetailDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueReceivableDetailDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueReceivableDetailDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 营收客户数据ID
   */
  revenueCustomerId?: string
  _revenueCustomerId?: string
  /**
   * 应收单ID
   */
  receivableId?: string
  _receivableId?: string
  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 应收单到账日期
   */
  receiptDate?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportRevenueCustomerDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerDataVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerDataVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
}

export interface RReportRevenueCustomerDataDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerDataDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerDataDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportRevenueAmountDetailVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetailVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetailVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 客户ID
   */
  clientId?: string
  _clientId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  businessDate?: string

}

export interface RReportRevenueAmountDetailDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetailDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetailDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 客户ID
   */
  clientId?: string
  _clientId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  businessDate?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportOperatingDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
}

export interface RReportOperatingDataDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RListReportBusinessCategoryRankingVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRankingVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRankingVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

}

export interface RReportBusinessCategoryRankingDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRankingDtlVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRankingDtlVO {
/**
 * 主键ID
 */
  id?: string
  _id?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 创建人ID
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门ID
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

  /**
   * 是否已删除：0-未删除；1-已删除
   */
  isDeleted?: number

}

export interface RReportScreenYearlyOperationReportVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenYearlyOperationReportVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenYearlyOperationReportVO {
/**
 * 年度
 */
  年度name?: number

  /**
   * 合同总金额
   */
  contractTotalAmount?: number

  /**
   * 合同总金额单位
   */
  contractTotalAmountUnit?: string

  /**
   * 财税类合同金额
   */
  financialTaxContractAmount?: number

  /**
   * 财税类合同金额单位
   */
  financialTaxContractAmountUnit?: string

  /**
   * 非财税类合同金额
   */
  nonFinancialTaxContractAmount?: number

  /**
   * 非财税类合同金额单位
   */
  nonFinancialTaxContractAmountUnit?: string

  /**
   * 应收总额
   */
  totalReceivableAmount?: number

  /**
   * 应收总额单位
   */
  totalReceivableAmountUnit?: string

  /**
   * 应收收款总额
   */
  totalReceivedAmount?: number

  /**
   * 应收收款总额单位
   */
  totalReceivedAmountUnit?: string

  /**
   * 应收未收款总额
   */
  totalUnreceivedAmount?: number

  /**
   * 应收未收款总额单位
   */
  totalUnreceivedAmountUnit?: string

}

export interface RListReportScreenSalesTrendVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenSalesTrendVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenSalesTrendVO {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 年度
   */
  year?: number

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
}

export interface RListRankTargetCompletionRateVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankTargetCompletionRateVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankTargetCompletionRateVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 销售目标完成率
   */
  targetCompletionRate?: number

}

export interface RListRankReceivableAmountVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankReceivableAmountVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankReceivableAmountVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

}

export interface RListRankContractAmountVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: RankContractAmountVO[]

  /**
   * msg
   */
  msg?: string

}

export interface RankContractAmountVO {
/**
 * 年度
 */
  year?: number

  /**
   * 销售（业务）组织
   */
  saleOrgName?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

}

export interface RReportScreenRegionMapTotalVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapTotalVO

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenRegionMapTotalVO {
/**
 * 年月
 */
  yearAndMonth?: string

  /**
   * 当月营业收入金额
   */
  receivableAmount?: number

  /**
   * 当月签约金额
   */
  contractAmount?: number

  /**
   * 应收收入金额单位
   */
  receivableAmountUnit?: string

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

}

export interface RReportScreenRegionMapRankingVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapRankingVO

  /**
   * msg
   */
  msg?: string

}

export interface RankingVO {
/**
 * 排名
 */
  ranking?: number

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 金额
   */
  amount?: number

  /**
   * 金额单位
   */
  amountUnit?: string

  /**
   * 销售组织id
   */
  saleOrgId?: string
  _saleOrgId?: string
  /**
   * 销售组织名称
   */
  saleOrgName?: string

}

export interface ReportScreenRegionMapRankingVO {
/**
 * 营业总额排名
 */
  totalRevenueRanking?: RankingVO[]

  /**
   * 签约金额排名
   */
  contractAmountRanking?: RankingVO[]

}

export interface ReportScreenRegionMapDataPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 时间
   */
  mapDate?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 客户数
   */
  signedCustomers?: number

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 镇
   */
  town?: string

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: number

}

export interface RListReportScreenRegionMapVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenRegionMapVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenRegionMapVO {
/**
 * 时间
 */
  date?: string

  /**
   * 签约金额
   */
  contractAmount?: number

  /**
   * 营业收入总额
   */
  receivableAmount?: number

  /**
   * 客户数
   */
  signedCustomers?: number

  /**
   * 签约金额单位
   */
  contractAmountUnit?: string

  /**
   * 营业收入总额单位
   */
  receivableAmountUnit?: string

  /**
   * 省
   */
  province?: string

  /**
   * 市
   */
  city?: string

  /**
   * 区
   */
  district?: string

  /**
   * 镇
   */
  town?: string

  /**
   * 区域名称
   */
  regionName?: string

}

export interface RListReportScreenProductRevenueShareVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenProductRevenueShareVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenProductRevenueShareVO {
/**
 * 服务项目编码
 */
  serviceItemCode?: string

  /**
   * 服务项目名
   */
  serviceItemName?: string

  /**
   * 排序
   */
  ranking?: number

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 金额单位
   */
  totalAmountUnit?: string

}

export interface RListReportScreenBusinessRevenueShareVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportScreenBusinessRevenueShareVO[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportScreenBusinessRevenueShareVO {
/**
 * 业务类别编码
 */
  categoryId?: string
  _categoryId?: string
  /**
   * 业务类别名
   */
  categoryName?: string

  /**
   * 占比
   */
  ratio?: number

  /**
   * 排序
   */
  ranking?: number

}

export interface RListReportRevenueCustomerData {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueCustomerData[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueCustomerData {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 欠费金额
   */
  dueAmount?: number

  /**
   * 服务项目名称
   */
  serviceItemName?: string

  /**
   * 服务项目ID
   */
  serviceItemId?: string
  _serviceItemId?: string
  /**
   * 到账日期
   */
  receiptDate?: string

  /**
   * 客户名称
   */
  customerName?: string

  /**
   * 客户ID
   */
  customerId?: string
  _customerId?: string
  /**
   * 组织id
   */
  orgId?: string
  _orgId?: string
}

export interface RReportRevenueAmountDetail {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportRevenueAmountDetail

  /**
   * msg
   */
  msg?: string

}

export interface ReportRevenueAmountDetail {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 应收单ID
   */
  receiveId?: string
  _receiveId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 营业收入金额
   */
  revenueAmount?: number

  /**
   * 收款金额
   */
  receivedAmount?: number

  /**
   * 业务日期
   */
  yearAndMonth?: string

}

export interface ReportOperatingDataPageQO {
/**
 * 当前页
 */
  current?: number

  /**
   * 每页的数量
   */
  size?: number

  /**
   * 升序字段：用','隔开
   */
  ascStr?: string

  /**
   * 降序字段：用','隔开
   */
  descStr?: string

  /**
   * id列表
   */
  idList?: number[]

  /**
   * 类型 01-新签- 02续签 03-终止
   */
  type?: string

  /**
   * 年月
   */
  yearAndMonth?: string

  /**
   * 总金额
   */
  totalAmount?: number

  /**
   * 总数量
   */
  totalNum?: number

  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 业务状态:1-正常；0-禁用
   */
  status?: number

}

export interface IPageReportOperatingDataVO {
/**
 * size
 */
  size?: number

  /**
   * records
   */
  records?: ReportOperatingDataVO[]

  /**
   * current
   */
  current?: number

  /**
   * total
   */
  total?: number

  /**
   * pages
   */
  pages?: number

}

export interface RIPageReportOperatingDataVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: IPageReportOperatingDataVO

  /**
   * msg
   */
  msg?: string

}

export interface OperatingDataInfo {
/**
 * 本月新签合同金额
 */
  contractAmount?: number

  /**
   * 金额单位
   */
  amountUnit?: string

  /**
   * 本月新签合同数量
   */
  contractNum?: number

  /**
   * 本月新签合同数量比率
   */
  contractNumRate?: number

  /**
   * 本月新签合同金额比率
   */
  contractAmountRate?: number

}

export interface RReportOperatingDataInfo {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportOperatingDataInfo

  /**
   * msg
   */
  msg?: string

}

export interface ReportOperatingDataInfo {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人ID
   */
  createUser?: number

  /**
   * 创建人姓名
   */
  createUserName?: string

  /**
   * 创建部门ID
   */
  createDept?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人ID
   */
  updateUser?: number

  /**
   * 更新人姓名
   */
  updateUserName?: string

  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * newContract
   */
  newContract?: OperatingDataInfo

  /**
   * renewContract
   */
  renewContract?: OperatingDataInfo

  /**
   * newContractYear
   */
  newContractYear?: OperatingDataInfo

  /**
   * renewContractYear
   */
  renewContractYear?: OperatingDataInfo

  /**
   * stopContractYear
   */
  stopContractYear?: OperatingDataInfo

}

export interface RListReportBusinessCategoryRanking {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ReportBusinessCategoryRanking[]

  /**
   * msg
   */
  msg?: string

}

export interface ReportBusinessCategoryRanking {
/**
 * 主键id
 */
  id?: string
  _id?: string
  /**
   * 创建人id
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建部门id
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 更新人id
   */
  updateUserId?: string
  _updateUserId?: string
  /**
   * 更新时间
   */
  updateTime?: string

  /**
   * 业务状态：启用-1，禁用-0
   */
  status?: string

  /**
   * 删除区分：未删除-0，已删除-1，物理删除-2
   */
  isDeleted?: string

  /**
   * 租户ID
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 组织ID
   */
  orgId?: string
  _orgId?: string
  /**
   * 合同数
   */
  contractCount?: number

  /**
   * 合同日期 年-月
   */
  contractDate?: string

  /**
   * 服务项目ID
   */
  businessCategoryId?: string
  _businessCategoryId?: string
  /**
   * 服务项目名称
   */
  businessCategoryName?: string

}

export interface ExportTaskDtlVO {
/**
 * 业务类别
 */
  bizType?: string

  /**
   * 客户id
   */
  clientId?: string
  _clientId?: string
  /**
   * 编号
   */
  code?: string

  /**
   * 创建部门
   */
  createDeptId?: string
  _createDeptId?: string
  /**
   * 生成状态：0-未开始-NOT_START；1-进行中-CREATING；2-成功-SUCCESS；3-失败-FAIL；
   */
  createStatus?: number

  /**
   * 创建时间
   */
  createTime?: string

  /**
   * 创建人
   */
  createUserId?: string
  _createUserId?: string
  /**
   * 创建人名称
   */
  createUserName?: string

  /**
   * 失效时间
   */
  expireTime?: string

  /**
   * 导出失败文件id
   */
  failFileId?: string
  _failFileId?: string
  /**
   * id
   */
  id?: string
  _id?: string
  /**
   * 是否已删除
   */
  isDeleted?: boolean

  /**
   * 报表名称
   */
  name?: string

  /**
   * 所属组织id
   */
  ownOrgId?: string
  _ownOrgId?: string
  /**
   * 页面查询参数参数(以json形式传输)
   */
  param?: string

  /**
   * 业务状态:0-禁用；1-启用
   */
  status?: boolean

  /**
   * 导出成功文件id
   */
  successFileId?: string
  _successFileId?: string
  /**
   * 租户id
   */
  tenantId?: string
  _tenantId?: string
  /**
   * 修改时间
   */
  updateTime?: string

  /**
   * 修改人
   */
  updateUserId?: string
  _updateUserId?: string
}

export interface RExportTaskDtlVO {
/**
 * code
 */
  code?: number

  /**
   * success
   */
  success?: boolean

  /**
   * data
   */
  data?: ExportTaskDtlVO

  /**
   * msg
   */
  msg?: string

}
