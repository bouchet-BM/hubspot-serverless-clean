exports.main = async (context, sendResponse) => {
  const { params = {} } = context;
  const name = params.name || 'World';
  
  return sendResponse({
    statusCode: 200,
    body: { 
      message: `Hello ${name} from clean functions!`,
      timestamp: new Date().toISOString(),
      success: true,
      deployed_via: 'GitHub Integration - Clean Project',
      function: 'hello-world'
    }
  });
};