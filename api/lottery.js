export default async function handler(req, res) {
  // 设置CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  
  try {
    // 先返回静态数据测试
    const staticData = [
      {
        period: "2025002",
        numbers: [3, 5, 8],
        date: "2025-01-02",
        sum: 16,
        span: 5,
        type: "组六"
      },
      {
        period: "2025001",
        numbers: [2, 4, 6],
        date: "2025-01-01",
        sum: 12,
        span: 4,
        type: "顺子"
      },
      {
        period: "2024365",
        numbers: [1, 1, 7],
        date: "2024-12-31",
        sum: 9,
        span: 6,
        type: "对子"
      }
    ];
    
    res.status(200).json({
      success: true,
      updateTime: new Date().toISOString(),
      total: staticData.length,
      data: staticData
    });
    
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
